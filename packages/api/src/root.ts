import { feedbackRouter } from './routers/feedback';
import { greetingRouter } from './routers/greeting';
import { waitListRouter } from './routers/wait-list';
import { createRouter } from './setup/trpc';

export const appRouter = createRouter({
  waitlist: waitListRouter,
  feedback: feedbackRouter,
  greeting: greetingRouter,
});

export type AppRouter = typeof appRouter;
