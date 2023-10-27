import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { moduleTable } from "./module";
import { subtask } from "./subtask";

export const task = sqliteTable("task", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),

  title: text("title").notNull(),
  description: text("description").notNull(),

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

export type Task = typeof task.$inferSelect;
export type NewTask = typeof task.$inferInsert;

export const taskRelations = relations(task, ({ one, many }) => ({
  module: one(moduleTable),
  subtask: many(subtask),
}));

export const insertTaskSchema = createInsertSchema(task).omit({
  id: true,
  done: true,
  doneAt: true,
  createdAt: true,
});

export const updateTaskSchema = createInsertSchema(task).omit({
  moduleId: true,
  done: true,
});

export const selectTaskSchema = createSelectSchema(task).omit({
  createdAt: true,
  description: true,
  dueDate: true,
  priority: true,
  title: true,
});
