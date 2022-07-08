import { z } from 'zod';
import { t } from '../utils/trpc';

export const helloRouter = t.router({
  greeting: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => ({
      msg: `Hello ${input.name}`,
    })),
});
