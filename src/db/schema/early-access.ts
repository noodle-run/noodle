import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const earlyAccessTable = pgTable('early_access', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  reason: text('reason', { enum: ['student', 'project', 'both'] }).notNull(),
  approved: boolean('approved').default(false),
  createdAt: timestamp('created_at', {
    mode: 'date',
    precision: 3,
  }).defaultNow(),
  invitationSentAt: timestamp('invitation_sent_at', {
    mode: 'date',
    precision: 3,
  }),
});

export const insertEarlyAccessSchema = createInsertSchema(
  earlyAccessTable,
).pick({
  email: true,
  name: true,
  reason: true,
});
