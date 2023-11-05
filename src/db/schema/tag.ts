import { relations, sql } from "drizzle-orm";
import { primaryKey, text } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "./noodle_table";
import { taskTable } from "./task";

export const tagTable = sqliteTable("tag", {
  id: text("id").notNull(),

  userId: text("userId").notNull(),

  name: text("name").notNull(),

  color: text("color").notNull().default("primary"),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),

  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const tagRelation = relations(tagTable, ({ many }) => ({
  tasks: many(taskTable),
}));

export const tasksToTags = sqliteTable(
  "tasksToTags",
  {
    taskId: text("taskId")
      .notNull()
      .references(() => taskTable.id),
    tagId: text("tagId")
      .notNull()
      .references(() => tagTable.id),
  },
  (t) => ({
    pk: primaryKey(t.taskId, t.tagId),
  }),
);

export const tasksToTagsRelations = relations(tasksToTags, ({ one }) => ({
  task: one(taskTable, {
    fields: [tasksToTags.taskId],
    references: [taskTable.id],
  }),
  tag: one(tagTable, {
    fields: [tasksToTags.tagId],
    references: [tagTable.id],
  }),
}));
