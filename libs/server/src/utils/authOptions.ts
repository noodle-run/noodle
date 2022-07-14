import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { prisma } from './prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env['GITHUB_ID'] as string,
      clientSecret: process.env['GITHUB_SECRET'] as string,
    }),
  ],
  secret: process.env['NEXTAUTH_SECRET'],
};
