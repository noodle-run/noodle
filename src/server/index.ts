import { earlyAccessRouter } from './routers/early-access';
import { modulesRouter } from './routers/modules';
import { createCallerFactory, createRouter } from './trpc';

export const appRouter = createRouter({
  earlyAccess: earlyAccessRouter,
  modules: modulesRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
