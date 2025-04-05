import { earlyAccessRouter } from './routers/early-access';
import { modulesRouter } from './routers/modules';
import { weatherRouter } from './routers/weather';
import { createCallerFactory, createRouter, publicProcedure } from './trpc';

export const appRouter = createRouter({
  healthcheck: publicProcedure.query(() => 'ok'),
  earlyAccess: earlyAccessRouter,
  modules: modulesRouter,
  weather: weatherRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
