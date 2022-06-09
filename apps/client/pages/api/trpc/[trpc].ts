import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import * as z from 'zod';

export const appRouter = trpc.router().query('hello', {
  input: z.object({
    msg: z.string(),
  }),
  resolve({ input }) {
    return {
      greeting: `hello ${input.msg}, I'm the backend`,
    };
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
