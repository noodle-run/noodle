import { z } from 'zod';
import { authProcedure } from '../middlewares';
import { t } from '../utils/trpc';

export const helloRouter = t.router({
  greeting: authProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => ({
      msg: `Hello ${input.name}, this message is protected and you can only see it when authenticated`,
    })),
});
