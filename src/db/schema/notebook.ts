import { createId } from "@paralleldrive/cuid2";
import { relations, sql } from "drizzle-orm";
import { text } from "drizzle-orm/sqlite-core";
import { moduleTable } from ".";
import { sqliteTable } from "./noodle_table";

export const notebooks = sqliteTable("notebooks", {
  id: text("id").$defaultFn(() => createId()),

  userId: text("userId").notNull(),

  title: text("title").default("Untitled"),
  icon: text("icon").default("book"),
  content: text("content").default(""),

  moduleId: text("moduleId")
    .notNull()
    .references(() => moduleTable.id),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  lastVisited: text("lastVisited")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const notebooksRelations = relations(notebooks, ({ one }) => ({
  module: one(moduleTable, {
    fields: [notebooks.moduleId],
    references: [moduleTable.id],
  }),
}));
