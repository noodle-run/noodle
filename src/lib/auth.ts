import type { DefaultSession } from 'next-auth';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Apple from 'next-auth/providers/apple';
import Resend from 'next-auth/providers/resend';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { type Provider } from 'next-auth/providers';
import { db } from '@/db';
import { env } from '@/env';
import EmailVerificationEmail from '@/emails/templates/email-verification';
import { resend } from './resend';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

const providers: Provider[] = [
  env.RESEND_API_KEY
    ? Resend({
        apiKey: env.RESEND_API_KEY,
        from: 'Noodle <signin@noodle.run>',
        async sendVerificationRequest(params) {
          const { identifier, provider, url } = params;

          const result = await resend.emails.send({
            from: provider.from ?? 'Noodle <signin@noodle.run>',
            to: identifier,
            subject: 'Sign in to Noodle',
            react: EmailVerificationEmail({
              name: identifier,
              verificationLink: url,
            }),
          });

          if (result.error) {
            throw new Error(result.error.message);
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
