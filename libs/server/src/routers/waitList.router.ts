import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { t } from '../utils/trpc';

export const waitListRouter = t.router({
  addEmailToWaitList: t.procedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.waitingList.create({
          data: {
            email: input.email,
          },
        });
      } catch (err: unknown) {
        const error = err as { code: string; message: string };
        if (error.code === 'P2002') {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'The email address is already on the waitlist.',
          });
        }

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }
    }),
});
