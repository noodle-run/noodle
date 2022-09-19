import { t } from '../utils/trpc';
import { userRouter } from './user.router';

export const appRouter = t.mergeRouters(userRouter);

export type AppRouter = typeof appRouter;
