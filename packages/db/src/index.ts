import { PrismaClient } from '@prisma/client';

import { env } from '@noodle/env';

export * from '@prisma/client';

const globalForPrisma = globalThis as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: `${env.DATABASE_URL.replace(
          '.eu-central-1',
          '-pooler.eu-central-1',
        )}?pgbouncer=true&connect_timeout=15&pool_timeout=15`,
      },
    },
    log:
      env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
