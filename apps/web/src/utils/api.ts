import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import SuperJSON from 'superjson';

import { type AppRouter } from '@noodle/api';
import { getBaseUrl } from '@noodle/utils';

import type {} from '@noodle/db/src/schema';

export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: SuperJSON,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
