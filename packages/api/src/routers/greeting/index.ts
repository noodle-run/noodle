import { z } from 'zod';

import { protectedProcedure } from '../../middlewares/auth';
import { createRouter, publicProcedure } from '../../setup/trpc';

export const greetingRouter = createRouter({
  hello: publicProcedure
    .input(
      z.object({
        name: z.string().optional().nullable(),
      }),
    )
    .query(({ input }) => {
      return {
        message: `Hello ${input.name ?? 'World'}`,
      };
    }),
  helloProtected: protectedProcedure.query(
    ({ ctx }) =>
      `Hello ${ctx.session.user.name ?? 'there'}, you are authenticated!`,
  ),
});
