import { t } from '../utils/trpc';
import { greetingRouter } from './greeting.router';
import { userRouter } from './user.router';

export const appRouter = t.mergeRouters(userRouter, greetingRouter);

export type AppRouter = typeof appRouter;
