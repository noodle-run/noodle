import { TRPCError } from '@trpc/server';
import { t } from '../utils/trpc';

export const authMiddleWare = t.middleware(({ next, ctx }) => {
  if (!ctx.session) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      session: ctx.session,
    },
  });
});
