import { feedbackRouter } from "./routers/feedback";
import { moduleRouter } from "./routers/module";
import { todoRouter } from "./routers/todos";
import { waitlistRouter } from "./routers/waitlist";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  waitlist: waitlistRouter,
  feedback: feedbackRouter,
  module: moduleRouter,
  todos: todoRouter,
});

export type AppRouter = typeof appRouter;
