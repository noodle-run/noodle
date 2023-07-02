import { protectedProcedure } from '../../middlewares/auth';
import { createRouter } from '../../setup/trpc';

export const userRouter = createRouter({
  find: createRouter({
    all: protectedProcedure.query(async ({ ctx }) => {
      return await ctx.prisma.user.findMany();
    }),
  }),
});
