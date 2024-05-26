import { z } from 'zod';

import { createRouter, protectedProcedure } from '../trpc';

export const greetingRouter = createRouter({
  protected: protectedProcedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input, ctx }) => {
      return {
        message: `Hello, ${input?.name ?? ctx.session.firstName ?? ''}, I'm from the tRPC procedure!`,
      };
    }),
});
