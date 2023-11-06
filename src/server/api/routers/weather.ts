import { TRPCError } from "@trpc/server";
import fetch from "node-fetch";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

type RawWeatherData = {
  properties: {
    timeseries: {
      data: {
        next_12_hours: {
          summary: {
            symbol_code: string;
          }
        },
        instant: {
          details: {
            air_temperature: number;
          }
        }
      }
    }[]
  }
}

type WeatherData = {
  temp_max: number;
  temp_min: number;
  summary: string;
};

export const weatherRouter = createTRPCRouter({
  getWeatherData: protectedProcedure
    .input(
      z.object({
        latitude: z.number(),
        longitude: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const { latitude, longitude } = input;

      const response = await fetch(
        `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`,
        {
          headers: {
            "User-Agent": `noodle.run (https://github.com/noodle-run/noodle)`
          }
        }
      );

      if (!response.ok) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch weather data",
        });
      }

      const rawWeatherData: RawWeatherData = await response.json() as RawWeatherData;

      if (rawWeatherData.properties.timeseries.length < 12) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Partial weather data"
        })
      }

      const temperatures = [];

      for (const timeseries of rawWeatherData.properties.timeseries) {
        temperatures.push(timeseries.data.instant.details.air_temperature);
      }

      const weatherData: WeatherData = {
        summary: rawWeatherData.properties.timeseries[0]!.data.next_12_hours.summary.symbol_code,
        temp_max: Math.max(...temperatures),
        temp_min: Math.min(...temperatures)
      }
      
      return weatherData;
    }),
});
