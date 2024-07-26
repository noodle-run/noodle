import { and, desc, eq } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';
import { db } from '..';
import { modulesTable } from '../schema';
import type { z } from 'zod';

export const getModuleById = (id: string, userId: string) =>
  db.query.modulesTable.findFirst({
    where: and(eq(modulesTable.id, id), eq(modulesTable.user_id, userId)),
  });

export const getModulesByUserId = (userId: string) =>
  db
    .select()
    .from(modulesTable)
    .where(eq(modulesTable.user_id, userId))
    .orderBy(desc(modulesTable.lastVisited));

const insertModuleSchema = createInsertSchema(modulesTable).omit({
  id: true,
  createdAt: true,
  modifiedAt: true,
  lastVisited: true,
});

export const createModule = (data: z.infer<typeof insertModuleSchema>) =>
  db.insert(modulesTable).values({
    ...data,
    color: data.color ?? 'default',
    icon: data.icon ?? 'default',
    archived: data.archived ?? false,
    credits: data.credits ?? 0,
  });

export const archiveModule = (id: string, userId: string) =>
  db
    .update(modulesTable)
    .set({ archived: true })
    .where(and(eq(modulesTable.id, id), eq(modulesTable.user_id, userId)));

export const recoverModule = (id: string, userId: string) =>
  db
    .update(modulesTable)
    .set({ archived: false })
    .where(and(eq(modulesTable.id, id), eq(modulesTable.user_id, userId)));

export const updateModule = async (
  id: string,
  userId: string,
  data: z.infer<typeof insertModuleSchema>,
) => {
  const existingModule = await getModuleById(id, userId);

  if (!existingModule) {
    throw new Error('Module not found');
  }

  return db
    .update(modulesTable)
    .set({
      ...data,
      color: data.color ?? existingModule.color,
      icon: data.icon ?? existingModule.icon,
      archived: data.archived ?? existingModule.archived,
      credits: data.credits ?? existingModule.credits,
    })
    .where(and(eq(modulesTable.id, id), eq(modulesTable.user_id, userId)));
};

export const deleteModule = (id: string, userId: string) =>
  db
    .delete(modulesTable)
    .where(and(eq(modulesTable.id, id), eq(modulesTable.user_id, userId)));

export const updateLastVisited = (id: string, userId: string) =>
  db
    .update(modulesTable)
    .set({ lastVisited: new Date() })
    .where(and(eq(modulesTable.id, id), eq(modulesTable.user_id, userId)));
