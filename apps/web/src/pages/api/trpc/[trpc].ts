import { createNextApiHandler } from '@trpc/server/adapters/next';

import { appRouter, createContext } from '@noodle/api';

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
