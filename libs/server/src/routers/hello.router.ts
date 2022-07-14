import { z } from 'zod';
import { authMiddleWare } from '../middlewares';
import { t } from '../utils/trpc';

export const helloRouter = t.router({
  greeting: t.procedure
    .use(authMiddleWare)
    .input(z.object({ name: z.string() }))
    .query(({ input }) => ({
      msg: `Hello ${input.name}, this message is protected and you can only see it when authenticated`,
    })),
});
