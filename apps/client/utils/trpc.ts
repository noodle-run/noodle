import type { AppRouter } from '@noodle/server';
import { setupTRPC } from '@trpc/next';
import superjson from 'superjson';

export const trpc = setupTRPC<AppRouter>({
  config() {
    return {
      url: '/api/trpc',
      transformer: superjson,
    };
  },
  ssr: false,
});
