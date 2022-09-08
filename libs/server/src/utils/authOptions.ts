import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from './prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env['GITHUB_ID'] as string,
      clientSecret: process.env['GITHUB_SECRET'] as string,
    }),
    EmailProvider({
      server: {
        host: process.env['EMAIL_SERVER_HOST'] as string,
        port: process.env['EMAIL_SERVER_PORT'] as string,
        auth: {
          user: process.env['EMAIL_SERVER_USER'] as string,
          pass: process.env['EMAIL_SERVER_PASSWORD'] as string,
        },
      },
      from: process.env['EMAIL_FROM'] as string,
    }),
    GoogleProvider({
      clientId: process.env['GOOGLE_CLIENT_ID'] as string,
      clientSecret: process.env['GOOGLE_CLIENT_SECRET'] as string,
    }),
  ],
  secret: process.env['NEXTAUTH_SECRET'],
};
