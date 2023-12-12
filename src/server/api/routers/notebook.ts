import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const notebookRouter = createTRPCRouter({
  get: createTRPCRouter({
    byId: protectedProcedure
      .input(
        z.object({
          id: z.string(),
        }),
      )
      .query(async ({ ctx, input }) => {
        const { id } = input;

        try {
          const notebook = await ctx.db.query.notebooks.findFirst({
            where: (table, { eq, and }) =>
              and(eq(table.userId, ctx.auth.userId), eq(table.id, id)),
          });

          return notebook;
        } catch (err) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to fetch notebook",
          });
        }
      }),

    allByModuleId: protectedProcedure
      .input(
        z.object({
          moduleId: z.string(),
        }),
      )
      .query(async ({ ctx, input }) => {
        const { moduleId } = input;

        try {
          const notebooks = await ctx.db.query.notebooks.findMany({
            where: (table, { eq, and }) =>
              and(
                eq(table.userId, ctx.auth.userId),
                eq(table.moduleId, moduleId),
              ),
          });

          return notebooks;
        } catch (err) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Could not fetch notebooks",
          });
        }
      }),
  }),
});