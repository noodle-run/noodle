import { feedbackRouter } from "./routers/feedback";
import { moduleRouter } from "./routers/module";
import { waitlistRouter } from "./routers/waitlist";
import { weatherRouter } from "./routers/weather";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  weather: weatherRouter,
  waitlist: waitlistRouter,
  feedback: feedbackRouter,
  module: moduleRouter,
});

export type AppRouter = typeof appRouter;
