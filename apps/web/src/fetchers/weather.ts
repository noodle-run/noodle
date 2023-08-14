import { useQuery } from '@tanstack/react-query';

import { env } from '@noodle/env';

import { useCoords } from '@/hooks/useCoords';

export type WeatherData = {
  main: {
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
  }[];
};

export const fetchWeatherData = async (
  latitude: number,
  longitude: number,
): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`,
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json() as Promise<WeatherData>;
};

export const useFetchWeatherDataQuery = () => {
  const coords = useCoords();

  return useQuery<WeatherData, Error>(
    ['weather', coords?.latitude, coords?.longitude],
    () => fetchWeatherData(coords?.latitude ?? 0, coords?.longitude ?? 0),
    {
      enabled: coords !== null,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );
};
