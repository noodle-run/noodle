import { createRouter, protectedProcedure } from '../trpc';
import {
  insertModuleSchema,
  modulesTable,
  selectModuleSchema,
} from '@/db/schema';
import { TRPCError } from '@trpc/server';
import { DrizzleError, and, eq } from 'drizzle-orm';

export const modulesRouter = createRouter({
  getById: protectedProcedure
    .input(selectModuleSchema.pick({ id: true }))
    .query(async ({ ctx, input }) => {
      try {
        const userModule = await ctx.db.query.modulesTable.findFirst({
          where: (t, { and, eq }) =>
            and(eq(t.id, input.id), eq(t.userId, ctx.userId)),
        });

        if (!userModule) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Module not found',
          });
        }

        return userModule;
      } catch (error) {
        if (error instanceof DrizzleError) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: error.message,
          });
        }

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An error occurred while fetching the module',
        });
      }
    }),

  getUserModules: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.query.modulesTable.findMany({
      where: (t, { eq }) => eq(t.userId, ctx.userId),
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
      return ctx.db
        .insert(modulesTable)
        .values({
          ...input,
          description: input.description ?? '',
          userId: ctx.userId,
        })
        .returning();
    }),

  archive: protectedProcedure
    .input(selectModuleSchema.pick({ id: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db
        .update(modulesTable)
        .set({ archived: true })
        .where(
          and(
            eq(modulesTable.id, input.id),
            eq(modulesTable.userId, ctx.userId),
          ),
        );
    }),

  recover: protectedProcedure
    .input(selectModuleSchema.pick({ id: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db
        .update(modulesTable)
        .set({ archived: false })
        .where(
          and(
            eq(modulesTable.id, input.id),
            eq(modulesTable.userId, ctx.userId),
          ),
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
      const { id: moduleId, ...updateData } = input;

      const existingModule = await ctx.db.query.modulesTable.findFirst({
        where: (t, { and, eq }) =>
          and(eq(t.id, moduleId), eq(t.userId, ctx.userId)),
      });

      if (!existingModule) {
        throw new Error('Module not found');
      }

      return ctx.db
        .update(modulesTable)
        .set({
          ...updateData,
          description: updateData.description ?? '',
          modifiedAt: new Date(),
        })
        .where(
          and(
            eq(modulesTable.id, moduleId),
            eq(modulesTable.userId, ctx.userId),
          ),
        );
    }),

  updateLastVisited: protectedProcedure
    .input(insertModuleSchema.pick({ id: true }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db
        .update(modulesTable)
        .set({ lastVisited: new Date() })
        .where(
          and(
            eq(modulesTable.id, input.id),
            eq(modulesTable.userId, ctx.userId),
          ),
        );
    }),
});
