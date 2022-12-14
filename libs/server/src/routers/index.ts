import { t } from '../utils/trpc';
import { greetingRouter } from './greeting.router';
import { userRouter } from './user.router';
import { waitListRouter } from './waitList.router';

export const appRouter = t.mergeRouters(
  userRouter,
  greetingRouter,
  waitListRouter,
);

export type AppRouter = typeof appRouter;
