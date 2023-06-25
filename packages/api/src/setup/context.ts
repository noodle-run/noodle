import { type CreateNextContextOptions } from '@trpc/server/adapters/next';

// TODO: add session as an option to provide to context type
// eslint-disable-next-line
type ContextOptions = {};

export const createInnerContext = (opts: ContextOptions) => {
  // TODO: create the db connection here and pass it in the return object
  return {
    ...opts,
  };
};

// TODO: get the session here and pass it to the inner function
export const createContext = (_: CreateNextContextOptions) => {
  return createInnerContext({});
};

export type Context = typeof createContext;
