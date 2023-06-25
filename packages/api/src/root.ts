import { greetingRouter } from './routers/greeting';
import { createRouter } from './setup/trpc';

export const appRouter = createRouter({
  greeting: greetingRouter,
});

export type AppRouter = typeof appRouter;
