import {
  insertTaskSchema,
  moduleTable,
  selectTaskSchema,
  taskTable,
} from "@/db";
import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const taskRouter = createTRPCRouter({
  get: createTRPCRouter({
    all: protectedProcedure.query(async ({ ctx }) => {
      try {
        const tasks = ctx.db
          .select()
          .from(taskTable)
          .leftJoin(moduleTable, eq(taskTable.moduleId, moduleTable.id))
          .where(eq(moduleTable.userId, ctx.auth.userId));

        return tasks;
      } catch (err) {
        console.error(err);

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "An error ocurred while getting your tasks.",
        });
      }
    }),
    byModule: protectedProcedure
      .input(selectTaskSchema.pick({ moduleId: true }))
      .query(async ({ ctx, input }) => {
        try {
          const tasksWithModule = await ctx.db
            .select()
            .from(taskTable)
            .leftJoin(moduleTable, eq(taskTable.moduleId, moduleTable.id))
            .where(
              and(
                eq(moduleTable.userId, ctx.auth.userId),
                eq(taskTable.moduleId, input.moduleId),
              ),
            );

          return tasksWithModule.map((taskWithModule) => taskWithModule.task);
        } catch (err) {
          console.error(err);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "An error occurred while getting tasks by module.",
          });
        }
      }),
    byDate: protectedProcedure
      .input(selectTaskSchema.pick({ dueDate: true }))
      .query(async ({ ctx, input }) => {
        try {
          const tasksWithModule = await ctx.db
            .select()
            .from(taskTable)
            .leftJoin(moduleTable, eq(taskTable.moduleId, moduleTable.id))
            .where(
              and(
                eq(taskTable.dueDate, input.dueDate),
                eq(moduleTable.userId, ctx.auth.userId),
              ),
            );

          return tasksWithModule.map((taskWithModule) => taskWithModule.task);
        } catch (err) {
          console.error(err);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "An error occurred while getting tasks by date.",
          });
        }
      }),
  }),
  post: createTRPCRouter({
    create: protectedProcedure
      .input(insertTaskSchema)
      .mutation(async ({ ctx, input }) => {
        try {
          const createdTask = await ctx.db
            .insert(taskTable)
            .values({
              ...input,
              tags: [],
            })
            .returning();

          return createdTask;
        } catch (err) {
          console.error(err);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "An error occurred while creating the task.",
          });
        }
      }),
    repeat: protectedProcedure
      .input(selectTaskSchema.pick({ id: true }))
      .mutation(async ({ ctx, input }) => {
        try {
          const [taskWithModule] = await ctx.db
            .select()
            .from(taskTable)
            .leftJoin(moduleTable, eq(moduleTable.id, taskTable.moduleId))
            .where(
              and(
                eq(taskTable.id, input.id),
                eq(moduleTable.userId, ctx.auth.userId),
              ),
            )
            .limit(1);

          if (!taskWithModule) {
            throw new TRPCError({
              code: "NOT_FOUND",
              message: "The task you are trying to repeat does not exist.",
            });
          }

          const { id, createdAt, updatedAt, done, doneAt, ...rest } =
            taskWithModule.task;
          const repeatedTask = await ctx.db
            .insert(taskTable)
            .values({
              ...rest,
            })
            .returning();

          return repeatedTask;
        } catch (err) {
          console.error(err);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "An error occurred while repeating the task.",
          });
        }
      }),
  }),
  patch: createTRPCRouter({
    switchDone: protectedProcedure
      .input(selectTaskSchema.pick({ id: true }))
      .mutation(async ({ ctx, input }) => {
        try {
          const [taskWithModule] = await ctx.db
            .select()
            .from(taskTable)
            .leftJoin(moduleTable, eq(moduleTable.id, taskTable.moduleId))
            .where(
              and(
                eq(taskTable.id, input.id),
                eq(moduleTable.userId, ctx.auth.userId),
              ),
            )
            .limit(1);

          if (!taskWithModule) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: `The task you are trying to mark as done does not exist`,
            });
          }

          const { task } = taskWithModule;

          const res = await ctx.db
            .update(taskTable)
            .set({
              done: !task.done,
              doneAt: !task.done ? new Date().toString() : null,
            })
            .where(eq(taskTable.id, input.id))
            .returning();

          return res;
        } catch (err) {
          console.error(err);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message:
              "An error occurred while switching the task's done status.",
          });
        }
      }),
  }),
  delete: createTRPCRouter({
    byId: protectedProcedure
      .input(selectTaskSchema.pick({ id: true }))
      .mutation(async ({ ctx, input }) => {
        try {
          const [taskWithModule] = await ctx.db
            .select()
            .from(taskTable)
            .leftJoin(moduleTable, eq(moduleTable.id, taskTable.moduleId))
            .where(
              and(
                eq(taskTable.id, input.id),
                eq(moduleTable.userId, ctx.auth.userId),
              ),
            )
            .limit(1);

          if (!taskWithModule) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: `The task you are trying to delete does not exist`,
            });
          }

          const { task } = taskWithModule;

          const deleteResult = await ctx.db
            .delete(taskTable)
            .where(eq(taskTable.id, task.id))
            .returning();

          return deleteResult;
        } catch (err) {
          console.error(err);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "An error occurred while deleting the task.",
          });
        }
      }),
  }),
});
