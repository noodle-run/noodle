import { ErrorPanel, Skeleton, Typography } from '@noodle/ui';

import { api } from '@/utils/api';

const Greeting = () => {
  const { data, isLoading, error } = api.greeting.get.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-11 w-72" />
        <Skeleton className="h-5 w-96" />
        <Skeleton className="h-5 w-96" />
      </div>
    );
  }

  if (error) {
    return <ErrorPanel errorMessage={error.message} className="h-36" />;
  }

  return (
    <div className="space-y-3">
      <Typography.H3 as="h1">{data.greeting}</Typography.H3>
      <Typography.P className="max-w-[57ch]">{data.quote}</Typography.P>
    </div>
  );
};

export { Greeting };
