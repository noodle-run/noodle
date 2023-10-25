import { relations, sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { sqliteTable } from "./noodle_table";
import { notebooks } from "./notebook";

export const moduleTable = sqliteTable("module", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),

  userId: text("userId").notNull(),

  name: text("name").notNull(),
  code: text("code").notNull(),
  icon: text("icon").notNull().default("graduation-cap"),
  color: text("color").notNull().default("primary"),
  credits: integer("credits").notNull(),

  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  lastVisited: text("lastVisited")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const moduleTableRelations = relations(moduleTable, ({ many }) => ({
  notebooks: many(notebooks),
}));

export const insertModuleSchema = createInsertSchema(moduleTable, {
  color: z.string(),
}).omit({
  id: true,
  userId: true,
  createdAt: true,
  lastVisited: true,
});

export const updateModuleSchema = createInsertSchema(moduleTable).omit({
  id: true,
  createdAt: true,
  userId: true,
});

export const selectModuleSchema = createSelectSchema(moduleTable).omit({
  name: true,
  code: true,
  icon: true,
  color: true,
  credits: true,
  createdAt: true,
});
