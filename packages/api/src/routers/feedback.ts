import { TRPCError } from '@trpc/server';

import { eq, sql } from '@noodle/db';
import { feedbackTable, insertFeedbackSchema } from '@noodle/db/src/schema';

import { protectedProcedure } from '../middlewares/auth';
import { createRouter } from '../setup/trpc';

export const feedbackRouter = createRouter({
  add: protectedProcedure
    .input(insertFeedbackSchema)
    .mutation(async ({ input, ctx }) => {
      const { email, message } = input;

      const [countRes] = await ctx.db
        .select({
          count: sql<number>`count(*)`.mapWith(Number),
        })
        .from(feedbackTable)
        .where(eq(feedbackTable.email, email));

      if (countRes!.count > 4) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'You have already submitted 5 feedbacks',
        });
      }

      try {
        const [res] = await ctx.db
          .insert(feedbackTable)
          .values({
            email,
            message,
          })
          .returning();

        return res;
      } catch {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message:
            'Something went wrong with submitting your feedback. Please try again later.',
        });
      }
    }),
});
