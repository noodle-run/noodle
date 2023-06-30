import { type FC } from 'react';

import { api } from '@/utils/api';

type GreetingProps = {
  name: string | null | undefined;
};

export const Greeting: FC<GreetingProps> = ({ name }) => {
  const { data, isLoading, error } = api.greeting.hello.useQuery({
    name,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return <p>{data.message}</p>;
};
