"use client";

import { trpc } from "@/trpc/client";
import {
  Button,
  Checkbox,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { AlertTriangle, TrashIcon } from "lucide-react";
import { forwardRef } from "react";

const Task = forwardRef<
  HTMLDivElement,
  {
    task: number;
    checked: boolean;
    name: string;
    dueAt: Date;
  }
>(({ task, checked, name, dueAt }, ref) => {
  const setChecked = trpc.todos.update.setChecked.useMutation();
  const remove = trpc.todos.delete.byId.useMutation();
  const { onOpen, onOpenChange, isOpen } = useDisclosure();

  const utils = trpc.useUtils();

  return (
    <div className="flex gap-2" ref={ref}>
      <Checkbox
        isSelected={checked}
        onChange={async (e) => {
          e.preventDefault();
          await setChecked.mutateAsync({ checked: e.target.checked, id: task });
          await utils.todos.invalidate();
        }}
      />
      <button>
        <p
          className={`${
            checked ? "text-gray-400 line-through" : "hover:underline"
          } cursor-pointer decoration-gray-200`}
        >
          {name}
        </p>
      </button>
      <p className="text-gray-500">{dueAt.toDateString()}</p>
      <div className="flex-grow" />
      {checked ? (
        <button
          className="aspect-square rounded-lg p-2 transition duration-200 hover:bg-neutral-900"
          onClick={() => {
            onOpen();
          }}
        >
          <TrashIcon size={18} color="#4b5563" />
        </button>
      ) : (
        ""
      )}
      <Modal onOpenChange={onOpenChange} isOpen={isOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <AlertTriangle
                  color="#dc2626"
                  size={20}
                  className="mr-2 mt-1"
                />
                Are you sure you want to delete?
              </ModalHeader>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
                <Button
                  color="danger"
                  isLoading={remove.isLoading}
                  onClick={async () => {
                    await remove.mutateAsync(task);
                    await utils.todos.invalidate();
                    onClose();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
});

export default Task;
