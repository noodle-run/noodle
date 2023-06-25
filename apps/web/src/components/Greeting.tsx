import { api } from '@/utils/api';

export const Greeting = () => {
  const { data, isLoading, error } = api.greeting.hello.useQuery({
    name: 'John Doe',
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return <p>{data.message}</p>;
};
