import { helloRouter } from './routers/hello.router';
import { t } from './utils/trpc';

export const appRouter = t.mergeRouters(helloRouter);

export type AppRouter = typeof appRouter;
