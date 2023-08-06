import { TRPCError } from '@trpc/server';

import { eq } from '@noodle/db';
import { insertModuleSchema, moduleTable } from '@noodle/db/src/schema';

import { protectedProcedure } from '../middlewares/auth';
import { createRouter } from '../setup/trpc';

export const moduleRouter = createRouter({
  get: createRouter({
    all: protectedProcedure.query(async ({ ctx }) => {
      try {
        const modules = await ctx.db.query.moduleTable.findMany({
          where: eq(moduleTable.userId, ctx.auth.userId),
        });

        return modules;
      } catch (err) {
        const error = err as Error;

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }
    }),
  }),

  create: protectedProcedure
    .input(insertModuleSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const module = await ctx.db
          .insert(moduleTable)
          .values({
            ...input,
            userId: ctx.auth.userId,
            icon: input.icon ?? 'graduation-cap',
          })
          .returning();

        return module;
      } catch (err) {
        const error = err as Error;

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error.message,
        });
      }
    }),
});
