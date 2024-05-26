import { greetingRouter } from './routers/greeting';
import { createCallerFactory, createRouter } from './trpc';

export const appRouter = createRouter({
  greeting: greetingRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
