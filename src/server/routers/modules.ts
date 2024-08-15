import { createRouter, protectedProcedure } from '../trpc';
import {
  insertModuleSchema,
  modulesTable,
  selectModuleSchema,
} from '@/db/schema';
import { and, eq } from 'drizzle-orm';

export const modulesRouter = createRouter({
  getById: protectedProcedure
    .input(selectModuleSchema.pick({ id: true }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.user.id;

      return ctx.db.query.modulesTable.findFirst({
        where: (t, { and, eq }) =>
          and(eq(t.id, input.id), eq(t.user_id, userId)),
      });
    }),

  getUserModules: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user.id;

    return ctx.db.query.modulesTable.findMany({
      where: (t, { eq }) => eq(t.user_id, userId),
      orderBy: (t, { desc }) => desc(t.lastVisited),
    });
  }),

  create: protectedProcedure
    .input(
      insertModuleSchema.pick({
        name: true,
        description: true,
        code: true,
        icon: true,
        color: true,
        credits: true,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id;

      return ctx.db
        .insert(modulesTable)
        .values({
          ...input,
          user_id: userId,
        })
        .returning();
    }),

  archive: protectedProcedure
    .input(selectModuleSchema.pick({ id: true }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id;

      return ctx.db
        .update(modulesTable)
        .set({ archived: true })
        .where(
          and(eq(modulesTable.id, input.id), eq(modulesTable.user_id, userId)),
        );
    }),

  recover: protectedProcedure
    .input(selectModuleSchema.pick({ id: true }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id;

      return ctx.db
        .update(modulesTable)
        .set({ archived: false })
        .where(
          and(eq(modulesTable.id, input.id), eq(modulesTable.user_id, userId)),
        );
    }),

  update: protectedProcedure
    .input(
      insertModuleSchema.pick({
        color: true,
        icon: true,
        name: true,
        description: true,
        code: true,
        credits: true,
        id: true,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id;

      const { id: moduleId, ...updateData } = input;

      const existingModule = await ctx.db.query.modulesTable.findFirst({
        where: (t, { and, eq }) =>
          and(eq(t.id, moduleId), eq(t.user_id, userId)),
      });

      if (!existingModule) {
        throw new Error('Module not found');
      }

      return ctx.db
        .update(modulesTable)
        .set({
          ...updateData,
          modifiedAt: new Date(),
        })
        .where(
          and(eq(modulesTable.id, moduleId), eq(modulesTable.user_id, userId)),
        );
    }),

  updateLastVisited: protectedProcedure
    .input(insertModuleSchema.pick({ id: true }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id;

      return ctx.db
        .update(modulesTable)
        .set({ lastVisited: new Date() })
        .where(
          and(eq(modulesTable.id, input.id), eq(modulesTable.user_id, userId)),
        );
    }),
});
