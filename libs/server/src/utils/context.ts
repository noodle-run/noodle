import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { unstable_getServerSession as getServerSession } from 'next-auth';
import { authOptions } from './authOptions';

import { prisma } from './prisma';

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions,
) => {
  const req = opts?.req;
  const res = opts?.res;

  const session = req && res && (await getServerSession(req, res, authOptions));

  return {
    req,
    res,
    session,
    prisma,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
