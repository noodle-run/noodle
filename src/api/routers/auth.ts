import { z } from 'zod';
import { createRouter, publicProcedure } from '../trpc';
import EmailVerificationEmail from '@/emails/templates/email-verification';
import { TRPCError } from '@trpc/server';

export const authRouter = createRouter({
  sendVerificationRequest: publicProcedure
    .input(
      z.object({
        identifier: z.string().email(),
        url: z.string().url(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { identifier, url } = input;

      try {
        const result = await ctx.resend.emails.send({
          from: 'Noodle <signin@noodle.run>',
          to: identifier,
          subject: 'Sign in to Noodle',
          react: EmailVerificationEmail({
            name: identifier,
            verificationLink: url,
          }),
        });

        if (result.error) {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: result.error.message,
          });
        }

        return { success: true };
      } catch (error) {
        if (error instanceof Error) {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: error.message,
          });
        }

        throw error;
      }
    }),
});
