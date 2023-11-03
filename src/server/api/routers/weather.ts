import { TRPCError } from "@trpc/server";
import fetch from "node-fetch";
import { z } from "zod";

import { env } from "@/env.mjs";

import { createTRPCRouter, protectedProcedure } from "../trpc";

type WeatherData = {
  main: {
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
  }[];
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
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${env.OPENWEATHER_API_KEY}&units=metric`,
      );

      if (!response.ok) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch weather data",
        });
      }

      return response.json() as Promise<WeatherData>;
    }),
});
