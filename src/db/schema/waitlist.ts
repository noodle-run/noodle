import { sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { sqliteTable } from "./noodle_table";

export const waitlist = sqliteTable("waitlist", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  reason: text("reason", { enum: ["student", "project", "both"] }).notNull(),
  createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
  invitationSentAt: text("invitationSentAt"),
});

export const insertWaitlist = createInsertSchema(waitlist).omit({
  id: true,
  createdAt: true,
});
