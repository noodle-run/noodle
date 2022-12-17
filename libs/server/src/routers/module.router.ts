import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { authProcedure } from '../middlewares';
import { t } from '../utils/trpc';

const moduleIdInput = z.object({ id: z.string() });

export const moduleRouter = t.router({
  getAllModules: authProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.module
      .findMany({
        where: { userId: ctx.session?.user?.id },
      })
      .catch((err: Error) => {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: err.message,
        });
      });

    const modules = data.map((module) => ({
      ...module,
      href: `/module/${module.id}`,
    }));

    return modules;
  }),
  updateModuleLastVisitedById: authProcedure
    .input(moduleIdInput)
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.module
        .update({
          where: { id: input.id },
          data: { lastVisited: new Date() },
        })
        .catch((err: Error) => {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: err.message,
          });
        });
    }),
  getRecentModules: authProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.module.findMany({
      where: { userId: ctx.session?.user?.id },
      take: 4,
      orderBy: { lastVisited: 'desc' },
    });

    const modules = data.map((module) => ({
      ...module,
      href: `/module/${module.id}`,
    }));

    return modules;
  }),
  getModuleById: authProcedure
    .input(moduleIdInput)
    .query(async ({ ctx, input }) => {
      const data = await ctx.prisma.module
        .findFirst({
          where: { id: input.id, userId: ctx.session?.user?.id },
        })
        .catch((err: Error) => {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: err.message,
          });
        });

      return data;
    }),
});
