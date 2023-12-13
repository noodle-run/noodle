import { relations, sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { moduleTable } from "./module";
import { sqliteTable } from "./noodle_table";
import { subtaskTable } from "./subtask";
import { tagTable } from "./tag";

export const taskTable = sqliteTable("task", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),

  title: text("title").notNull(),

  notes: text("notes").notNull(),

  completed: integer("completed", { mode: "boolean" }).default(false),
  completedAt: text("completedAt"),

  dueDate: text("dueDate").notNull(),
  personalDueDate: text("dueDate").notNull(),
  reminderDate: text("reminderDate").notNull(),

  priority: text("priority", { enum: ["LOW", "MEDIUM", "URGENT"] }).notNull(),

  tags: text("tags", { mode: "json" }).$type<string[]>(),

  moduleId: integer("module_id")
    .references(() => moduleTable.id)
    .notNull(),

  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),

  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const taskRelations = relations(taskTable, ({ one, many }) => ({
  module: one(moduleTable, {
    fields: [taskTable.moduleId],
    references: [moduleTable.id],
  }),
  tags: many(tagTable),
  subtask: many(subtaskTable),
}));

export const insertTaskSchema = createInsertSchema(taskTable).omit({
  id: true,
  done: true,
  doneAt: true,
  createdAt: true,
});

export const updateTaskSchema = createInsertSchema(taskTable).omit({
  moduleId: true,
  done: true,
});

export const selectTaskSchema = createSelectSchema(taskTable).omit({
  createdAt: true,
  description: true,
  priority: true,
  title: true,
});

export type Task = typeof taskTable.$inferSelect;
export type NewTask = typeof taskTable.$inferInsert;
