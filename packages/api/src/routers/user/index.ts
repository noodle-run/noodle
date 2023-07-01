import { createRouter, publicProcedure } from '../../setup/trpc';

export const userRouter = createRouter({
  find: createRouter({
    all: publicProcedure.query(async ({ ctx }) => {
      return await ctx.prisma.user.findMany();
    }),
  }),
});
