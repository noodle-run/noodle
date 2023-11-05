import { relations, sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { sqliteTable } from "./noodle_table";
import { taskTable } from "./task";

export const subtaskTable = sqliteTable("subtask", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),

  title: text("title").notNull(),

  completed: integer("completed", { mode: "boolean" }).default(false),
  completedAt: text("completedAt"),

  taskId: integer("task_id")
    .references(() => taskTable.id)
    .notNull(),

  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),

  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export type Subtask = typeof subtaskTable.$inferSelect;
export type NewSubtask = typeof subtaskTable.$inferInsert;

export const subtaskRelations = relations(subtaskTable, ({ one }) => ({
  task: one(taskTable),
}));

export const insertSubtaskSchema = createInsertSchema(subtaskTable).omit({
  id: true,
  createdAt: true,
  done: true,
  doneAt: true,
});

export const updateSubtaskSchema = createInsertSchema(subtaskTable).omit({
  moduleId: true,
  taskId: true,
  doneAt: true,
  createdAt: true,
});

export const selectSubtaskSchema = createSelectSchema(subtaskTable).omit({
  createdAt: true,
  description: true,
  dueDate: true,
  priority: true,
  title: true,
  notes: true,
  doneAt: true,
  done: true,
});
