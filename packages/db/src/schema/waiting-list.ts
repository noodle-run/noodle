import { sql } from 'drizzle-orm';
import {
  boolean,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const waitingListReason = pgEnum('WaitingListReason', [
  'STUDENT',
  'PROJECT',
  'BOTH',
]);

export const waitingListTable = pgTable(
  'WaitingList',
  {
    id: text('id')
      .primaryKey()
      .notNull()
      .default(sql`gen_random_uuid()`),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    reason: waitingListReason('reason').notNull(),
    approved: boolean('approved').notNull().default(false),
    createdAt: timestamp('createdAt', { precision: 3, mode: 'string' })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    emailKey: uniqueIndex('WaitingList_email_key').on(table.email),
  }),
);

export const insertWaitingListSchema = createInsertSchema(waitingListTable, {
  name: (schema) => schema.name,
  email: (schema) => schema.email.email(),
});
