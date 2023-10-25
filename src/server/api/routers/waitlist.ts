import { insertWaitlist, waitlist } from "@/db";
import { clerkClient } from "@clerk/nextjs";
import { LibsqlError } from "@libsql/client";
import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const waitlistRouter = createTRPCRouter({
  addToWaitlist: publicProcedure
    .input(insertWaitlist)
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.insert(waitlist).values({
          email: input.email,
          name: input.name,
          reason: input.reason,
        });
      } catch (err) {
        if (
          err instanceof LibsqlError &&
          err.message.includes("UNIQUE constraint")
        ) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "You are already on the waitlist",
          });
        } else {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to add to waitlist",
          });
        }
      }
    }),
  getWaitList: protectedProcedure.query(async ({ ctx }) => {
    const waitList = await ctx.db.select().from(waitlist);

    return waitList;
  }),
  sendUserInvitation: protectedProcedure
    .input(
      z.object({
        invitationId: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { invitationId } = input;

      console.log("invitationId", invitationId);

      const invitation = await ctx.db
        .select()
        .from(waitlist)
        .where(eq(waitlist.id, invitationId))
        .limit(1);

      if (invitation.length > 0 && invitation[0]) {
        await clerkClient.allowlistIdentifiers.createAllowlistIdentifier({
          identifier: invitation[0].email,
          notify: true,
        });

        await ctx.db
          .update(waitlist)
          .set({ invitationSentAt: new Date().toDateString() })
          .where(eq(waitlist.id, invitationId));
      }

      return invitation;
    }),
});
