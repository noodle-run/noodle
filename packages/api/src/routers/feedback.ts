import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { protectedProcedure } from '../middlewares/auth';
import { createRouter } from '../setup/trpc';

export const feedbackRouter = createRouter({
  add: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        message: z.string().min(3),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { email, message } = input;

      const countOfFeedbacksForEmail = await ctx.prisma.feedback.count({
        where: {
          email,
        },
      });

      if (countOfFeedbacksForEmail > 4) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'You have already submitted 5 feedbacks',
        });
      }

      try {
        const entry = await ctx.prisma.feedback.create({
          data: {
            email,
            message,
          },
        });

        return entry;
      } catch (e) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message:
            'Something went wrong with submitting your feedback. Please try again later.',
        });
      }
    }),
});
