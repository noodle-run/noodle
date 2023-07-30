import { feedbackRouter } from './routers/feedback';
import { waitListRouter } from './routers/wait-list';
import { createRouter } from './setup/trpc';

export const appRouter = createRouter({
  waitlist: waitListRouter,
  feedback: feedbackRouter,
});

export type AppRouter = typeof appRouter;
