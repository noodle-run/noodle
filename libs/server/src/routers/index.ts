import { t } from '../utils/trpc';
import { greetingRouter } from './greeting.router';
import { moduleRouter } from './module.router';
import { notebookRouter } from './notebook.router';
import { userRouter } from './user.router';
import { waitListRouter } from './waitList.router';

export const appRouter = t.mergeRouters(
  userRouter,
  greetingRouter,
  waitListRouter,
  moduleRouter,
  notebookRouter,
);

export type AppRouter = typeof appRouter;
