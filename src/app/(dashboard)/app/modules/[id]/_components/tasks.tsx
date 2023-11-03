"use client";

import { trpc } from "@/trpc/client";
import Task from "./task-item";
import { motion } from "framer-motion";

const MotionTask = motion(Task);

export default function Tasks(props: { id: string }) {
  const id = Number(props.id);
  const [todos] = trpc.task.get.byModule.useSuspenseQuery({ moduleId: id });

  return (
    <div className="m-1 mt-4 min-h-full w-1/4 rounded border border-gray-900">
      <h2 className="m-4 text-lg font-medium">Tasks for today</h2>
      {todos && todos.length != 0 ? (
        <ol className="p-4">
          {todos.map((todo) => (
            <MotionTask
              layout
              key={todo.id}
              checked={todo.done ?? false}
              name={todo.title}
              task={todo.id}
              dueAt={new Date(todo.dueDate)}
            />
          ))}
        </ol>
      ) : (
        <p className="ml-4 text-gray-500">No tasks due today!</p>
      )}
    </div>
  );
}
