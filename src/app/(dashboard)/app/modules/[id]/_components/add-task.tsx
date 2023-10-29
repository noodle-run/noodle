"use-client";

import { useZodForm } from "@/hooks/useZodForm";
import { trpc } from "@/trpc/client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { z } from "zod";

export default function AddTask(props: {
  isOpen: boolean;
  onOpenChange: (arg: boolean) => void;
  moduleId: number;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useZodForm({
    schema: z.object({
      name: z.string(),
      note: z.string().optional(),
      dueAt: z
        .string()
        .refine((str) => !isNaN(Date.parse(str)), { message: "Invalid date" }),
      priority: z.enum(["low", "high", "medium"]),
    }),
  });

  const { mutateAsync, isLoading } = trpc.todos.create.new.useMutation();
  const utils = trpc.useUtils();

  return (
    <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <form
              noValidate
              onSubmit={handleSubmit(async (data) => {
                await mutateAsync({
                  moduleId: props.moduleId,
                  name: data.name,
                  priority: data.priority,
                  note: data.note,
                  dueAt: new Date(Date.parse(data.dueAt)),
                });
                await utils.todos.invalidate();

                onClose();
                reset();
              })}
            >
              <ModalHeader>Add Task</ModalHeader>
              <ModalBody>
                <Input
                  label="Name"
                  placeholder="Complete Quick Sort Flow Chart"
                  size="md"
                  radius="md"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                  {...register("name")}
                />
                <Textarea
                  label="Note"
                  placeholder="Write it in Rust"
                  size="md"
                  radius="md"
                  variant="bordered"
                  labelPlacement="outside"
                  isInvalid={!!errors.note}
                  errorMessage={errors.note?.message}
                  {...register("note")}
                />
                <Select
                  label="Priority"
                  size="md"
                  placeholder="Medium"
                  radius="md"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired
                  isInvalid={!!errors.priority}
                  errorMessage={errors.priority?.message}
                  {...register("priority")}
                >
                  <SelectItem key="low" value="low">
                    Low
                  </SelectItem>
                  <SelectItem key="medium" value="medium">
                    Medium
                  </SelectItem>
                  <SelectItem key="high" value="high">
                    High
                  </SelectItem>
                </Select>
                <Input
                  type="date"
                  label="Due At"
                  placeholder="Jan 1, 1970"
                  size="md"
                  radius="md"
                  variant="bordered"
                  labelPlacement="outside"
                  isRequired
                  isInvalid={!!errors.dueAt}
                  errorMessage={errors.dueAt?.message}
                  {...register("dueAt")}
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => onClose()}>Cancel</Button>
                <Button isLoading={isLoading} color="primary" type="submit">
                  Confirm
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
