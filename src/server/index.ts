import { earlyAccessRouter } from './routers/early-access';
import { createCallerFactory, createRouter } from './trpc';

export const appRouter = createRouter({
  earlyAccess: earlyAccessRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
