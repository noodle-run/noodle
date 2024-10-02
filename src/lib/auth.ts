import type { DefaultSession } from 'next-auth';
import NextAuth from 'next-auth';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/db';
import { env } from '@/env';
import type { Provider } from 'next-auth/providers';
import Resend from 'next-auth/providers/resend';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Apple from 'next-auth/providers/apple';
import { api } from './trpc/vanilla';
import { TRPCError } from '@trpc/server';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

export const providers: Provider[] = [
  env.RESEND_API_KEY
    ? Resend({
        apiKey: env.RESEND_API_KEY,
        from: 'Noodle <signin@noodle.run>',
        async sendVerificationRequest(params) {
          const { identifier, url } = params;

          try {
            await api.auth.sendVerificationRequest.mutate({
              identifier,
              url,
            });
          } catch (error) {
            if (error instanceof TRPCError) {
              throw new Error(error.message);
            }
          }
        },
      })
    : undefined,
  env.AUTH_GITHUB_ID && env.AUTH_GITHUB_SECRET ? GitHub : undefined,
  env.AUTH_GOOGLE_ID && env.AUTH_GOOGLE_SECRET ? Google : undefined,
  env.AUTH_APPLE_ID && env.AUTH_APPLE_SECRET ? Apple : undefined,
].filter(Boolean);

export const providerMap = providers.map((provider) => {
  if (typeof provider === 'function') {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers,
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
});
