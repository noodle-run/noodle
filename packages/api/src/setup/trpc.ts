import { initTRPC } from '@trpc/server';
import SuperJSON from 'superjson';
import { ZodError } from 'zod';

import { type Context } from './context';

export const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const {
  procedure: publicProcedure,
  router: createRouter,
  middleware,
} = t;
