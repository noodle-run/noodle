import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';
import type { DefaultSession, NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { getServerSession as $getServerSession } from 'next-auth';

import { prisma } from '@noodle/db';

import { previewProviders, providers } from './providers';

declare module 'next-auth' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Session extends DefaultSession {
    user?: {
      id: string;
    } & DefaultSession['user'];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers:
    process.env['VERCEL_ENV'] === 'preview' ? previewProviders : providers,
};

type GetServerSessionContext =
  | {
      req: GetServerSidePropsContext['req'];
      res: GetServerSidePropsContext['res'];
    }
  | { req: NextApiRequest; res: NextApiResponse };

export const getServerSession = (ctx: GetServerSessionContext) =>
  $getServerSession(ctx.req, ctx.res, authOptions);

export type { Session } from 'next-auth';
