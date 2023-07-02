import type { Session } from '@noodle/auth';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';

import { getServerSession } from '@noodle/auth';
import { prisma } from '@noodle/db';

type ContextOptions = {
  session: Session | null;
};

export const createInnerContext = (opts: ContextOptions) => {
  return {
    ...opts,
    prisma,
  };
};

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
  const session = await getServerSession({ req, res });

  return createInnerContext({ session });
};

export type Context = typeof createContext;
