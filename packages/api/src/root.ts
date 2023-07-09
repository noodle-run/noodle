import { greetingRouter } from './routers/greeting';
import { userRouter } from './routers/user';
import { waitListRouter } from './routers/wait-list';
import { createRouter } from './setup/trpc';

export const appRouter = createRouter({
  greeting: greetingRouter,
  user: userRouter,
  waitlist: waitListRouter,
});

export type AppRouter = typeof appRouter;
