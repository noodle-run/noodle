import {
  index,
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const moduleTable = pgTable(
  'Module',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: varchar('userId', { length: 255 }).notNull(),

    name: varchar('name', { length: 255 }).notNull(),
    code: varchar('code', { length: 255 }).notNull(),
    icon: varchar('icon', { length: 255 }).notNull().default('graduation-cap'),
    credits: integer('credits').notNull(),

    createdAt: timestamp('createdAt').defaultNow(),
    lastVisited: timestamp('lastVisited').defaultNow(),
  },
  (table) => ({
    userIdKey: index('Module_userId_index').on(table.userId),
  }),
);

export const insertModuleSchema = createInsertSchema(moduleTable).pick({
  name: true,
  code: true,
  icon: true,
  credits: true,
});
export const selectModuleSchema = createSelectSchema(moduleTable).pick({
  id: true,
  userId: true,
});
