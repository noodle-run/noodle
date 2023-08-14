import { feedbackRouter } from './routers/feedback';
import { greetingRouter } from './routers/greeting';
import { waitListRouter } from './routers/wait-list';
import { weatherRouter } from './routers/weather';
import { createRouter } from './setup/trpc';

export const appRouter = createRouter({
  waitlist: waitListRouter,
  feedback: feedbackRouter,
  greeting: greetingRouter,
  weather: weatherRouter,
});

export type AppRouter = typeof appRouter;
