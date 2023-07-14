import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    // Database
    DATABASE_URL: z.string().url(),
    DIRECT_URL: z.string().url().optional(),

    // Redis
    REDIS_URL: z.string().url(),
    REDIS_TOKEN: z.string().min(3),

    // Next auth
    NEXTAUTH_SECRET:
      process.env['NODE_ENV'] === 'production'
        ? z.string().min(1)
        : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
      (str) => process.env['VERCEL_URL'] ?? str,
      process.env['VERCEL'] ? z.string().min(1) : z.string().url(),
    ),

    // Github OAuth
    GITHUB_CLIENT_ID: z.string().min(3).optional(),
    GITHUB_CLIENT_SECRET: z.string().min(3).optional(),

    // Misc
    VERCEL_URL: z.string().optional(),
    PORT: z
      .string()
      .transform((s) => parseInt(s, 10))
      .pipe(z.number())
      .optional(),
    NODE_ENV: z.enum(['development', 'test', 'production']),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {},
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    DATABASE_URL: process.env['DATABASE_URL'],
    REDIS_URL: process.env['REDIS_URL'],
    REDIS_TOKEN: process.env['REDIS_TOKEN'],
    VERCEL_URL: process.env['VERCEL_URL'],
    PORT: process.env['PORT'],
    GITHUB_CLIENT_ID: process.env['GITHUB_CLIENT_ID'],
    GITHUB_CLIENT_SECRET: process.env['GITHUB_CLIENT_SECRET'],
    NODE_ENV: process.env['NODE_ENV'],
    NEXTAUTH_SECRET: process.env['NEXTAUTH_SECRET'],
    NEXTAUTH_URL: process.env['NEXTAUTH_URL'],
    DIRECT_URL: process.env['DIRECT_URL'],
  },
});
