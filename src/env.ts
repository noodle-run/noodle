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

    // Redis
    REDIS_URL: z.string(),

    // Resend
    RESEND_API_KEY: z.string(),

    // Clerk
    CLERK_SECRET_KEY: z.string(),
  },
  client: {
    // Clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  },

  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env['NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'],
  },

  skipValidation: !!process.env['SKIP_ENV_VALIDATION'],
  emptyStringAsUndefined: true,
});
