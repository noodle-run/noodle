'use client';

import { type FC } from 'react';

import { useCoords } from '@/hooks/useCoords';
import { trpc } from '@/trpc/client';
import { getFormattedWeatherDescription } from '@/utils/get-formatted-weather-description';

import { Skeleton } from '@/primitives/skeleton';
import { formatDate } from '@/hooks/useDate';

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
        <Skeleton className="mt-2 w-[280] rounded-md">
          <div className="h-4" />
        </Skeleton>
        <Skeleton className="mt-2 w-3/4 rounded-md">
          <div className="h-4" />
        </Skeleton>
      </div>
    );
  }

  return (
    <div className="max-w-[280px] space-y-4">
      <p className="text-base text-foreground-muted">Its</p>
      <p className="text-base font-bold text-amber-500">
        {formatDate(new Date())}
      </p>

      {weatherData && (
        <p className=" cursor-default text-left text-sm leading-5 text-foreground-muted">
          You can expect a 👆 high of {weatherData.temp_max.toFixed()}º and a 👇
          low of {weatherData.temp_min.toFixed()}º{' '}
          {getFormattedWeatherDescription(weatherData.summary)}.
        </p>
      )}
    </div>
  );
};
