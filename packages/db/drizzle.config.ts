import type { Config } from 'drizzle-kit';

import { env } from '@noodle/env';

export default {
  schema: './src/schema/*',
  driver: 'pg',
  out: './drizzle',
  dbCredentials: {
    connectionString: `${env.DATABASE_URL}?sslmode=require`,
  },
} satisfies Config;
