import { relations, sql } from "drizzle-orm";
import { text } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "./noodle_table";
import { taskTable } from "./task";

export const projectTable = sqliteTable("project", {
  id: text("id").notNull(),

  userId: text("userId").notNull(),

  name: text("title").notNull(),
  description: text("description").notNull(),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),

  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const projectRelations = relations(projectTable, ({ many }) => ({
  tasks: many(taskTable),
}));
