import type {
  SignedInAuthObject,
  SignedOutAuthObject,
} from '@clerk/nextjs/server';
import { getAuth } from '@clerk/nextjs/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';

import { db } from '@noodle/db';

type ContextOptions = {
  auth: SignedInAuthObject | SignedOutAuthObject;
};

export const createInnerContext = (opts: ContextOptions) => {
  return {
    ...opts,
    db,
  };
};

export const createContext = ({ req }: CreateNextContextOptions) => {
  const auth = getAuth(req);

  return createInnerContext({ auth });
};

export type Context = typeof createContext;
