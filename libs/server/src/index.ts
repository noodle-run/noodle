import { hello } from './routers/hello.router';
import { createRouter } from './utils/createRouter';

export const appRouter = createRouter().merge('hello.', hello);

export type AppRouter = typeof appRouter;
