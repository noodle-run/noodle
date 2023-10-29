"use client";

import { trpc } from "@/trpc/client";
import { Button, useDisclosure } from "@nextui-org/react";
import AddTask from "./_components/add-task";
import Task from "./_components/task-item";
import { Suspense } from "react";
import { motion } from "framer-motion";

const MotionTask = motion(Task);

export default function Page({ params }: { params: { id: string } }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const id = Number(params.id);

  const [tasks] = trpc.todos.get.byModule.useSuspenseQuery({ moduleId: id });

  // FIXME: weird animation bug when moving
  return (
    <div>
      <Suspense>
        {!tasks || tasks.length == 0 ? (
          <div className="p-4 text-center">
            <p className="pb-4 text-center">No tasks.</p>
          </div>
        ) : (
          <ul className="p-4">
            {tasks.map(({ name, id, checked, dueAt }) => (
              <MotionTask
                layout
                key={id}
                task={id}
                name={name}
                checked={checked}
                dueAt={new Date(dueAt)}
              />
            ))}
          </ul>
        )}
      </Suspense>
      <Button color="primary" onClick={onOpen}>
        Add one
      </Button>
      <AddTask isOpen={isOpen} onOpenChange={onOpenChange} moduleId={id} />
    </div>
  );
}
