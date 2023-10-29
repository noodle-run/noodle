import { sql, relations } from "drizzle-orm";
import { sqliteTable } from "./noodle_table";
import { integer, text } from "drizzle-orm/sqlite-core";
import { moduleTable } from "./module";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const todoTable = sqliteTable("todo", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  moduleId: integer("moduleId", { mode: "number" }).notNull(),

  name: text("name").notNull(),
  note: text("note"),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  dueAt: text("dueAt").notNull(),

  priority: text("priority", { enum: ["low", "medium", "high"] }).notNull(),

  checked: integer("checked", { mode: "boolean" }).notNull().default(false),
});

export const todoRelations = relations(todoTable, ({ one }) => ({
  module: one(moduleTable, {
    fields: [todoTable.moduleId],
    references: [moduleTable.id],
  }),
}));

export const todoSelect = createSelectSchema(todoTable).pick({
  moduleId: true,
});

export const todoInsert = createInsertSchema(todoTable, {
  dueAt: z.date(),
}).omit({ createdAt: true, id: true });
