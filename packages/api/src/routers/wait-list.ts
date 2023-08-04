import { TRPCError } from '@trpc/server';

import {
  insertWaitingListSchema,
  waitingListTable,
} from '@noodle/db/src/schema';

import { t } from '../setup/trpc';

export const waitListRouter = t.router({
  addEmailToWaitList: t.procedure
    .input(insertWaitingListSchema)
    .mutation(async ({ ctx, input }) => {
      const { email, name, reason } = input;
      try {
        await ctx.db.insert(waitingListTable).values({
          email,
          name,
          reason,
        });
      } catch (err) {
        const error = err as Error;

        if (
          error.message.includes(
            'duplicate key value violates unique constraint',
          )
        ) {
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
