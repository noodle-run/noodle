"use client";

import { type FC } from "react";

import { Icon } from "@/components/icon";
import { useCoords } from "@/hooks/useCoords";
import { trpc } from "@/trpc/client";
import { getFormattedWeatherDescription } from "@/utils/getFormattedWeatherDescription";
import { Skeleton, Tooltip } from "@nextui-org/react";

export const WeatherData: FC = () => {
  const coords = useCoords();
  const { data: weatherData, isLoading } = trpc.weather.getWeatherData.useQuery(
    {
      latitude: coords?.latitude ?? 0,
      longitude: coords?.longitude ?? 0,
    },
    {
      enabled: !!coords,
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  if (isLoading) {
    return (
      <div>
        <Skeleton className="mt-2 w-[258px] rounded-md">
          <div className="h-4" />
        </Skeleton>
        <Skeleton className="mt-2 w-3/4 rounded-md">
          <div className="h-4" />
        </Skeleton>
      </div>
    );
  }

  if (!weatherData) return null;

  return (
    <Tooltip
      color="default"
      showArrow
      classNames={{
        content: "border dark:border-default-100 border-default-200",
      }}
      content={
        <div className="max-w-[30ch] px-1 py-2">
          <span className="flex items-center gap-3 pb-2">
            <Icon name="BadgeInfo" size={16} /> Info
          </span>
          <span className="text-tiny leading-5 text-default-500">
            The weather conditions are until the end of the day, so the high and
            low temps are until midnight.
          </span>
        </div>
      }
      placement="left-start"
      delay={1000}
    >
      <button className="cursor-default text-left text-tiny leading-5 text-default-500">
        You can expect a 👆 high of {weatherData.temp_max.toFixed()}º and a 👇
        low of {weatherData.temp_min.toFixed()}º{" "}
        {getFormattedWeatherDescription(weatherData.summary)}.
      </button>
    </Tooltip>
  );
};
