import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../pages/api/trpc/[trpc]';

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
