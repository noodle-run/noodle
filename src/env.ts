import { createEnv } from '@t3-oss/env-nextjs';
import { vercel } from '@t3-oss/env-nextjs/presets';
import { z } from 'zod';

export const env = createEnv({
  extends: [vercel()],
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },
  server: {
    PORT: z.coerce.number().default(3000),

    // Neon DB
    DATABASE_URL: z.string().url(),

    // Upstash
    UPSTASH_REDIS_REST_URL: z.string(),
    UPSTASH_REDIS_REST_TOKEN: z.string(),

    // Resend
    RESEND_API_KEY: z.string(),

    // NextAuth
    AUTH_SECRET: z.string(),
    AUTH_GITHUB_ID: z.string(),
    AUTH_GITHUB_SECRET: z.string(),
  },
  client: {},

  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },

  skipValidation: !!process.env['SKIP_ENV_VALIDATION'],
  emptyStringAsUndefined: true,
});
