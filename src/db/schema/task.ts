import { relations, sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { moduleTable } from "./module";
import { sqliteTable } from "./noodle_table";
import { subtaskTable } from "./subtask";

export const taskTable = sqliteTable("task", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),

  title: text("title").notNull(),

  notes: text("notes").notNull(),

  done: integer("done", { mode: "boolean" }).default(false),
  doneAt: text("doneAt"),

  dueDate: text("dueDate").notNull(),

  priority: text("priority", { enum: ["LOW", "MEDIUM", "HIGH"] }).notNull(),

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

export type Task = typeof taskTable.$inferSelect;
export type NewTask = typeof taskTable.$inferInsert;

export const taskRelations = relations(taskTable, ({ one, many }) => ({
  module: one(moduleTable, {
    fields: [taskTable.moduleId],
    references: [moduleTable.id],
  }),
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
