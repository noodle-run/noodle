import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import * as yup from 'yup';

export const appRouter = trpc.router().query('hello', {
  input: yup.object({
    msg: yup.string().required(),
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
