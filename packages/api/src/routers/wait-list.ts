import { clerkClient } from '@clerk/nextjs';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { eq } from '@noodle/db';
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
  getWaitList: t.procedure.query(async ({ ctx }) => {
    const waitList = await ctx.db.select().from(waitingListTable);

    return waitList;
  }),
  sendUserInvidation: t.procedure
    .input(
      z.object({
        invitationId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { invitationId } = input;

      const invitation = await ctx.db
        .select()
        .from(waitingListTable)
        .where(eq(waitingListTable.id, invitationId))
        .limit(1);

      if (invitation.length > 0 && invitation[0]) {
        await clerkClient.allowlistIdentifiers.createAllowlistIdentifier({
          identifier: invitation[0].email,
          notify: true,
        });

        await ctx.db
          .update(waitingListTable)
          .set({ invitationSentAt: new Date().toDateString() })
          .where(eq(waitingListTable.id, invitationId));
      }

      return invitation;
    }),
});
