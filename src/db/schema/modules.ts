import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export const modulesTable = pgTable('modules', {
  id: uuid('id').primaryKey().unique().defaultRandom().notNull(),
  user_id: text('user_id').notNull(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  code: text('code').notNull(),
  icon: text('icon').default('default').notNull(),
  color: text('color').default('default').notNull(),
  archived: boolean('archived').default(false).notNull(),
  credits: integer('credits').default(0).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  modifiedAt: timestamp('modified_at').notNull().defaultNow(),
  lastVisited: timestamp('last_visited').notNull().defaultNow(),
});
