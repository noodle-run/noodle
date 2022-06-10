import { AppRouter } from '@noodle/server';
import { createReactQueryHooks } from '@trpc/react';

export const {
  useQuery,
  useMutation,
  useContext,
  useDehydratedState,
  useInfiniteQuery,
  useSubscription,
  Provider,
  createClient,
} = createReactQueryHooks<AppRouter>();
