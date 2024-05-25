import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const earlyAccessTable = pgTable('early_access', {
  id: uuid('id').defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  reason: text('reason', { enum: ['student', 'project', 'both'] }).notNull(),
  approved: boolean('approved').default(false),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
  invitationSentAt: timestamp('invitation_sent_at', { mode: 'date' }),
});

export const insertEarlyAccess = createInsertSchema(earlyAccessTable).omit({
  id: true,
  createdAt: true,
});
