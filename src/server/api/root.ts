import { feedbackRouter } from "./routers/feedback";
import { moduleRouter } from "./routers/module";
import { waitlistRouter } from "./routers/waitlist";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  waitlist: waitlistRouter,
  feedback: feedbackRouter,
  module: moduleRouter,
});

export type AppRouter = typeof appRouter;
