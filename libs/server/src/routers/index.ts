import { t } from '../utils/trpc';
import { helloRouter } from './hello.router';

export const appRouter = t.mergeRouters(helloRouter);

export type AppRouter = typeof appRouter;
