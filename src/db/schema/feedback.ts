import { sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { sqliteTable } from "./noodle_table";

export const feedback = sqliteTable("feedback", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
});

export const insertFeedback = createInsertSchema(feedback).pick({
  email: true,
  message: true,
});
