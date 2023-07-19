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

    REDIS_URL: z.string().url(),
    REDIS_TOKEN: z.string().min(1),
  },
  client: {},
  experimental__runtimeEnv: {},
  skipValidation: !!process.env['CI'] || !!process.env['SKIP_ENV_VALIDATION'],
});
