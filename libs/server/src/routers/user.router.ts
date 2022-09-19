import { TRPCError } from '@trpc/server';
import { authProcedure } from '../middlewares';
import { t } from '../utils/trpc';

export const userRouter = t.router({
  me: authProcedure.query(async ({ ctx }) => {
    try {
      const user = await ctx.prisma.user.findUnique({
        where: {
          email: ctx.session.user?.email ?? undefined,
        },
      });

      return user;
    } catch (err) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Could not fetch current logged in user',
      });
    }
  }),
});
