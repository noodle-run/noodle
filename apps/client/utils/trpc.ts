import type { AppRouter } from '@noodle/server';
import { setupTRPC } from '@trpc/next';

export const trpc = setupTRPC<AppRouter>({
  config() {
    return {
      url: '/api/trpc',
    };
  },
  ssr: false,
});
