import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

function getCurrentDate(): string {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const rawWeatherDataSchema = z.object({
  type: z.literal("Feature"),
  geometry: z.object({
    type: z.literal("Point"),
    coordinates: z.tuple([z.number(), z.number(), z.number()]),
  }),
  properties: z.object({
    meta: z.object({
      updated_at: z.string(),
      units: z.object({
        air_pressure_at_sea_level: z.string(),
        air_temperature: z.string(),
        cloud_area_fraction: z.string(),
        precipitation_amount: z.string(),
        relative_humidity: z.string(),
        wind_from_direction: z.string(),
        wind_speed: z.string(),
      }),
    }),
    timeseries: z.array(
      z.object({
        time: z.string(),
        data: z.object({
          next_12_hours: z
            .object({
              summary: z.object({
                symbol_code: z.string(),
              }),
            })
            .optional(),
          next_6_hours: z
            .object({
              summary: z.object({
                symbol_code: z.string(),
              }),
            })
            .optional(),
          next_1_hours: z
            .object({
              summary: z.object({
                symbol_code: z.string(),
              }),
            })
            .optional(),
          instant: z.object({
            details: z.object({
              air_temperature: z.number(),
            }),
          }),
        }),
      }),
    ),
  }),
});

const weatherDataSchema = z.object({
  temp_max: z.number(),
  temp_min: z.number(),
  summary: z.string().optional(),
});

const getCurrentWeatherData = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const date = getCurrentDate();
  const request = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`;
  const response = await fetch(request, {
    headers: {
      "User-Agent": `noodle.run (https://github.com/noodle-run/noodle)`,
    },
  });

  const rawWeatherData = await rawWeatherDataSchema
    .parseAsync(await response.json())
    .catch(() => {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to parse weather data",
      });
    });

  const timeserieslist = rawWeatherData.properties.timeseries.filter((one) =>
    one.time.includes(date),
  );

  const temperatures = [];

  for (const timeseries of timeserieslist) {
    temperatures.push(timeseries.data.instant.details.air_temperature);
  }

  let summary: string | undefined;

  if (timeserieslist[0]?.data.next_12_hours) {
    summary = timeserieslist[0].data.next_12_hours.summary.symbol_code;
  } else if (timeserieslist[0]?.data.next_6_hours) {
    summary = timeserieslist[0].data.next_6_hours.summary.symbol_code;
  } else {
    summary = timeserieslist[0]?.data.next_1_hours?.summary.symbol_code;
  }

  const weatherData = {
    summary,
    temp_max: Math.max(...temperatures),
    temp_min: Math.min(...temperatures),
  };

  const data = await weatherDataSchema.parseAsync(weatherData).catch(() => {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to parse weather data",
    });
  });

  return data;
};

export const weatherRouter = createTRPCRouter({
  getWeatherData: protectedProcedure
    .input(
      z.object({
        latitude: z.number(),
        longitude: z.number(),
      }),
    )
    .output(weatherDataSchema)
    .query(async ({ input, ctx }) => {
      const date = getCurrentDate();
      if (typeof ctx.redis !== "undefined" && typeof ctx.redis !== "string") {
        const cachedWeatherData = await ctx.redis.get(
          `weather:${date}:${ctx.auth.userId}`,
        );

        if (!cachedWeatherData) {
          const weatherData = await getCurrentWeatherData(input);

          const now = new Date();
          const midnight = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 1,
          );
          const secondsUntilMidnight = Math.round(
            (midnight.getTime() - now.getTime()) / 1000,
          );

          await ctx.redis.set(
            `weather:${date}:${ctx.auth.userId}`,
            JSON.stringify(weatherData),
            { ex: secondsUntilMidnight },
          );

          return weatherData;
        }

        return weatherDataSchema
          .parseAsync(cachedWeatherData)
          .then((data) => {
            return data;
          })
          .catch(() => {
            return getCurrentWeatherData(input);
          });
      }

      return getCurrentWeatherData(input);
    }),
});
