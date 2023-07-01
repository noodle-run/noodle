import { greetingRouter } from './routers/greeting';
import { userRouter } from './routers/user';
import { createRouter } from './setup/trpc';

export const appRouter = createRouter({
  greeting: greetingRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
