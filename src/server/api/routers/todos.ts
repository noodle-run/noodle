import { todoInsert, todoSelect, todoTable } from "@/db";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { createTRPCReact } from "@trpc/react-query";

export const todoRouter = createTRPCRouter({
  get: createTRPCRouter({
    byModule: protectedProcedure
      .input(todoSelect)
      .query(async ({ ctx, input }) => {
        try {
          const todos = await ctx.db
            .select()
            .from(todoTable)
            .where(eq(todoTable.moduleId, input.moduleId))
            .orderBy(todoTable.checked, todoTable.dueAt);

          return todos;
        } catch (e) {
          console.error(e);
        }
      }),
  }),
  create: createTRPCRouter({
    new: protectedProcedure
      .input(todoInsert)
      .mutation(async ({ ctx, input }) => {
        try {
          await ctx.db.insert(todoTable).values({
            moduleId: input.moduleId,
            name: input.name,
            priority: input.priority,
            dueAt: input.dueAt.toISOString(),
            note: input.note,
          });
        } catch (e) {
          console.error(e);
        }
      }),
  }),
  update: createTRPCRouter({
    setChecked: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          checked: z.boolean(),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        try {
          await ctx.db
            .update(todoTable)
            .set({ checked: input.checked })
            .where(eq(todoTable.id, input.id));
        } catch (e) {
          console.error(e);
        }
      }),
  }),
  delete: createTRPCRouter({
    byId: protectedProcedure
      .input(z.number())
      .mutation(async ({ ctx, input }) => {
        try {
          await ctx.db.delete(todoTable).where(eq(todoTable.id, input));
        } catch (e) {
          console.error(e);
        }
      }),
  }),
});
