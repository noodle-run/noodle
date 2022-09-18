import type { AppRouter } from '@noodle/server';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import superjson from 'superjson';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        httpBatchLink({
          url: '/api/trpc',
          maxURLLength: 2083,
        }),
      ],
    };
  },
  ssr: false,
});
