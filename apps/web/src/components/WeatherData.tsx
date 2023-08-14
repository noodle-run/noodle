import { type FC } from 'react';

import { useCoords } from '@/hooks/useCoords';
import { api } from '@/utils/api';
import { getFormattedWeatherDescription } from '@/utils/getFormattedWeatherCondition';

export const WeatherData: FC = () => {
  const coords = useCoords();
  const { data: weatherData } = api.weather.getWeatherData.useQuery(
    {
      latitude: coords?.latitude ?? 0,
      longitude: coords?.longitude ?? 0,
    },
    {
      enabled: !!coords,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  if (!weatherData) return null;

  return (
    <span className="text-gray-11 dark:text-graydark-11 text-xs leading-5 xl:text-sm">
      You can expect a 👆 high of {weatherData.main.temp_max.toFixed()}º and a
      👇 low of {weatherData.main.temp_min.toFixed()}º with{' '}
      {getFormattedWeatherDescription(weatherData.weather[0]?.description)}{' '}
      today.
    </span>
  );
};
