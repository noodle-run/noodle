import { feedback, insertFeedback } from "@/db";
import { TRPCError } from "@trpc/server";
import { eq, sql } from "drizzle-orm";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const feedbackRouter = createTRPCRouter({
  submit: protectedProcedure
    .input(insertFeedback)
    .mutation(async ({ ctx, input }) => {
      const { email, message } = input;

      const [data] = await ctx.db
        .select({
          count: sql<number>`count(*)`.mapWith(Number),
        })
        .from(feedback)
        .where(eq(feedback.email, email));

      if (!data) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            "Something went wrong with submitting your feedback. Please try again later.",
        });
      }

      const { count } = data;

      if (count > 4) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You have already submitted 5 feedbacks",
        });
      }

      try {
        await ctx.db.insert(feedback).values({
          email,
          message,
        });
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            "Something went wrong with submitting your feedback. Please try again later.",
        });
      }
    }),
});
