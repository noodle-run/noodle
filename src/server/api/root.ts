import { feedbackRouter } from "./routers/feedback";
import { moduleRouter } from "./routers/module";
import { subtaskRouter } from "./routers/subtask";
import { taskRouter } from "./routers/task";
import { waitlistRouter } from "./routers/waitlist";
import { weatherRouter } from "./routers/weather";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  weather: weatherRouter,
  waitlist: waitlistRouter,
  feedback: feedbackRouter,
  module: moduleRouter,
  task: taskRouter,
  subtask: subtaskRouter,
});

export type AppRouter = typeof appRouter;
