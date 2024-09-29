import { earlyAccessTable } from '@/db/schema';
import { createRouter, publicProcedure } from '../trpc';
import EarlyAccessJoinedEmail from '@/emails/templates/early-access-joined';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { isEmailLikelyHuman } from '@/utils/human-email';

export const earlyAccessRouter = createRouter({
  joinEarlyAccess: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, { message: 'Name is too short' }),
        email: z.string().email({ message: 'Invalid email address' }).min(5),
        reason: z.enum(['student', 'project', 'both']).default('student'),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { email, name, reason } = input;
      const { db, resend } = ctx;

      const emailHuman = isEmailLikelyHuman(email);

      if (!emailHuman) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Please use a valid email address.',
        });
      }

      await db
        .insert(earlyAccessTable)
        .values({
          email,
          name,
          reason,
        })
        .catch((err: unknown) => {
          if (err instanceof Error) {
            if (
              err.message.includes(
                'duplicate key value violates unique constraint',
              )
            ) {
              throw new TRPCError({
                code: 'BAD_REQUEST',
                cause: err,
                message: 'This email is already on the early access list.',
              });
            }

            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              cause: err,
              message:
                'An error occurred while adding you to the early access list. Please try again later.',
            });
          }
        });

      await resend.emails
        .send({
          from: 'Noodle <contact@noodle.run>',
          to: email,
          subject: "You are on Noodle's early access list!",
          react: EarlyAccessJoinedEmail({ name, email }),
        })
        .catch((err: unknown) => {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            cause: err,
            message:
              'An error occurred while adding you to the early access list. Please try again later.',
          });
        });
    }),
});
