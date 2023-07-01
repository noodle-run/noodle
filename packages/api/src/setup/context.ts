import { type CreateNextContextOptions } from '@trpc/server/adapters/next';

import { prisma } from '@noodle/db';

// TODO: add session as an option to provide to context type
// eslint-disable-next-line
type ContextOptions = {};

export const createInnerContext = (opts: ContextOptions) => {
  return {
    ...opts,
    prisma,
  };
};

// TODO: get the session here and pass it to the inner function
export const createContext = (_: CreateNextContextOptions) => {
  return createInnerContext({});
};

export type Context = typeof createContext;
