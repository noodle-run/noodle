import { createTRPCMsw } from 'msw-trpc';
import SuperJSON from 'superjson';

import { type AppRouter } from '@noodle/api/.';

export const trpcMsw = createTRPCMsw<AppRouter>({
  baseUrl: '/api/trpc',
  transformer: {
    input: SuperJSON,
    output: SuperJSON,
  },
});
