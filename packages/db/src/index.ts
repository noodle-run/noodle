import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import { env } from '@noodle/env';

import * as schema from './schema';

neonConfig.fetchConnectionCache = true;

const sql = neon(env.DATABASE_URL);

export * from 'drizzle-orm';

export const db = drizzle(sql, {
  schema,
  logger: env.NODE_ENV === 'development',
});
