import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),

    DATABASE_URL: z.string().url(),

    NEXTAUTH_SECRET:
      process.env['NODE_ENV'] === 'production'
        ? z.string().min(1)
        : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
      (str) => process.env['VERCEL_URL'] ?? str,
      process.env['VERCEL'] ? z.string().min(1) : z.string().url(),
    ),

    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),

    UPSTASH_REDIS_REST_URL: z.string().url(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env['NODE_ENV'],
    DATABASE_URL: process.env['DATABASE_URL'],
    NEXTAUTH_SECRET: process.env['NEXTAUTH_SECRET'],
    NEXTAUTH_URL: process.env['NEXTAUTH_URL'],
    GITHUB_CLIENT_ID: process.env['GITHUB_CLIENT_ID'],
    GITHUB_CLIENT_SECRET: process.env['GITHUB_CLIENT_SECRET'],
    UPSTASH_REDIS_REST_URL: process.env['UPSTASH_REDIS_REST_URL'],
    UPSTASH_REDIS_REST_TOKEN: process.env['UPSTASH_REDIS_REST_TOKEN'],
  },
  skipValidation: !!process.env['SKIP_ENV_VALIDATION'],
});
