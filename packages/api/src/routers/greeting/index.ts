import { z } from 'zod';

import { createRouter, publicProcedure } from '../../setup/trpc';

export const greetingRouter = createRouter({
  hello: publicProcedure
    .input(
      z.object({
        name: z.string().optional(),
      }),
    )
    .query(({ input }) => {
      return {
        message: `Hello ${input.name ?? 'World'}`,
      };
    }),
});
