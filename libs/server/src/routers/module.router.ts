import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { authProcedure } from '../middlewares';
import { t } from '../utils/trpc';

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
  getModuleById: authProcedure
    .input(z.object({ id: z.string() }))
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
