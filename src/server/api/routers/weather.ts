import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

const hours = z
  .object({
    summary: z.object({
      symbol_code: z.string(),
    }),
  })
  .optional();

const timeseriesSchema = z.array(
  z.object({
    time: z.string(),
    data: z.object({
      next_12_hours: hours,
      next_6_hours: hours,
      next_1_hours: hours,
      instant: z.object({
        details: z.object({
          air_temperature: z.number(),
        }),
      }),
    }),
  }),
);

const weatherDataSchema = z.object({
  temp_max: z.number(),
  temp_min: z.number(),
  summary: z.string().optional(),
});

const input = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

const getCurrentWeatherData = async ({
  latitude,
  longitude,
}: z.infer<typeof input>) => {
  const date = new Date().toISOString().slice(0, 10);
  const response = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`,
    {
      headers: {
        "User-Agent": `noodle.run (https://github.com/noodle-run/noodle)`,
      },
    },
  );

  const data = (await response.json()) as {
    properties: { timeseries: unknown };
  };

  const timeseries = timeseriesSchema
    .parse(data.properties.timeseries as z.infer<typeof timeseriesSchema>)
    .filter((one) => one.time.includes(date));

  const temperatures = timeseries.map(
    (t) => t.data.instant.details.air_temperature,
  );

  let summary;
  if (timeseries[0]) {
    const { next_12_hours, next_6_hours, next_1_hours } = timeseries[0].data;
    const nextData = next_12_hours ?? next_6_hours ?? next_1_hours;
    summary = nextData?.summary.symbol_code;
  }

  const weatherData = {
    summary,
    temp_max: Math.max(...temperatures),
    temp_min: Math.min(...temperatures),
  };

  return weatherDataSchema.parse(weatherData);
};

export const weatherRouter = createTRPCRouter({
  getWeatherData: protectedProcedure
    .input(input)
    .output(weatherDataSchema)
    .query(async ({ input, ctx }) => {
      const date = new Date().toISOString().slice(0, 10);
      const cacheKey = `weather:${date}:${ctx.auth.userId}`;

      if (typeof ctx.redis !== "undefined" && typeof ctx.redis !== "string") {
        try {
          const cachedWeatherData = await ctx.redis.get(cacheKey);

          if (!cachedWeatherData) {
            const weatherData = await getCurrentWeatherData(input);
            const secondsUntilMidnight = Math.round(
              (new Date().setHours(24, 0, 0, 0) - Date.now()) / 1000,
            );

            await ctx.redis.set(cacheKey, JSON.stringify(weatherData), {
              ex: secondsUntilMidnight,
            });
            return weatherData;
          }

          return weatherDataSchema.parse(cachedWeatherData);
        } catch (error) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to fetch cached weather data",
          });
        }
      }

      try {
        return getCurrentWeatherData(input);
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch weather data",
        });
      }
    }),
});
