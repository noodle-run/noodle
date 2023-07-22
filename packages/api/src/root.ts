import { waitListRouter } from './routers/wait-list';
import { createRouter } from './setup/trpc';

export const appRouter = createRouter({
  waitlist: waitListRouter,
});

export type AppRouter = typeof appRouter;
