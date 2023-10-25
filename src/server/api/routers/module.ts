import { insertModuleSchema, moduleTable, selectModuleSchema } from "@/db";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { and, eq } from "drizzle-orm";

export const moduleRouter = createTRPCRouter({
  get: createTRPCRouter({
    all: protectedProcedure.query(async ({ ctx }) => {
      try {
        const modules = await ctx.db.query.moduleTable.findMany({
          where: (table, { eq }) => eq(table.userId, ctx.auth.userId),
        });

        return modules;
      } catch (err) {
        console.error(err);
      }
    }),
    byId: protectedProcedure
      .input(selectModuleSchema.pick({ id: true }))
      .query(async ({ ctx, input }) => {
        try {
          const res = await ctx.db.query.moduleTable.findFirst({
            where: (table, { eq, and }) =>
              and(eq(table.userId, ctx.auth.userId), eq(table.id, input.id)),
          });

          return res;
        } catch (err) {
          console.error(err);
        }
      }),
  }),
  post: createTRPCRouter({
    create: protectedProcedure
      .input(insertModuleSchema)
      .mutation(async ({ ctx, input }) => {
        try {
          const res = await ctx.db
            .insert(moduleTable)
            .values({
              ...input,
              color: input.color ?? "gray",
              userId: ctx.auth.userId,
            })
            .returning();

          return res;
        } catch (err) {
          console.error(err);
        }
      }),
    updateLastVisited: protectedProcedure
      .input(selectModuleSchema.pick({ id: true }))
      .mutation(async ({ ctx, input }) => {
        try {
          const res = await ctx.db
            .update(moduleTable)
            .set({ lastVisited: new Date().toString() })
            .where(
              and(
                eq(moduleTable.userId, ctx.auth.userId),
                eq(moduleTable.id, input.id),
              ),
            )
            .returning();

          return res;
        } catch (err) {
          console.error(err);
        }
      }),
  }),
});
