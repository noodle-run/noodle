import { sql } from 'drizzle-orm';
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const feedbackTable = pgTable('Feedback', {
  id: text('id')
    .primaryKey()
    .notNull()
    .default(sql`gen_random_uuid()`),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('createdAt', { precision: 3, mode: 'string' })
    .defaultNow()
    .notNull(),
});

export const insertFeedbackSchema = createInsertSchema(feedbackTable, {
  email: (schema) => schema.email.email(),
  message: (schema) => schema.message.min(3).max(1000),
});
