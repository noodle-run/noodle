import {
  insertSubtaskSchema,
  moduleTable,
  selectSubtaskSchema,
  subtaskTable,
  taskTable,
} from "@/db";
import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const subtaskRouter = createTRPCRouter({
  get: createTRPCRouter({
    byTask: protectedProcedure
      .input(selectSubtaskSchema.pick({ taskId: true }))
      .query(async ({ ctx, input }) => {
        try {
          const [taskWithModule] = await ctx.db
            .select()
            .from(taskTable)
            .leftJoin(moduleTable, eq(taskTable.moduleId, moduleTable.id))
            .where(
              and(
                eq(moduleTable.userId, ctx.auth.userId),
                eq(taskTable.id, input.taskId),
              ),
            )
            .limit(1);

          if (!taskWithModule) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message:
                "The task you are trying to get subtasks for does not exist",
            });
          }

          const { task } = taskWithModule;
          const subtasks = await ctx.db.query.subtaskTable.findMany({
            where: (table, { eq }) => eq(table.taskId, task.id),
          });

          return subtasks;
        } catch (err) {
          console.error(err);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "An error ocurred while getting subtasks",
          });
        }
      }),
  }),
  post: createTRPCRouter({
    create: protectedProcedure
      .input(insertSubtaskSchema)
      .mutation(async ({ ctx, input }) => {
        try {
          const [taskWithModule] = await ctx.db
            .select()
            .from(taskTable)
            .leftJoin(moduleTable, eq(taskTable.moduleId, moduleTable.id))
            .where(
              and(
                eq(moduleTable.userId, ctx.auth.userId),
                eq(taskTable.id, input.taskId),
              ),
            )
            .limit(1);

          if (!taskWithModule) {
            throw new TRPCError({
              code: "NOT_FOUND",
              message:
                "The task you are trying to add a subtask to does not exist.",
            });
          }

          const { task } = taskWithModule;
          const createdSubtask = await ctx.db
            .insert(subtaskTable)
            .values({
              ...input,
              taskId: task.id,
            })
            .returning();

          return createdSubtask;
        } catch (err) {
          console.error(err);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "An error ocurred while creating subtask.",
          });
        }
      }),
  }),
});
