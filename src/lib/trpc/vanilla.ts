import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@/api';
import SuperJSON from 'superjson';
import { getBaseUrl } from '@/utils/base-url';

export const api = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      transformer: SuperJSON,
      url: getBaseUrl() + '/api/trpc',
    }),
  ],
});
