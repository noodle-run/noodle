// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { appRouter, createContext } from '@noodle/server';
import * as trpcNext from '@trpc/server/adapters/next';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
