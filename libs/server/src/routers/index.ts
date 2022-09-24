import { t } from '../utils/trpc';
import { quotesRouter } from './quotes.routes';
import { userRouter } from './user.router';

export const appRouter = t.mergeRouters(userRouter, quotesRouter);

export type AppRouter = typeof appRouter;
