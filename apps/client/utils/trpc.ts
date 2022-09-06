import type { AppRouter } from '@noodle/server';
import { createTRPCNext } from '@trpc/next';
import superjson from 'superjson';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      url: '/api/trpc',
      transformer: superjson,
    };
  },
  ssr: false,
});
