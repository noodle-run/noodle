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
      title: z.string(),
      note: z.string().optional(),
      dueDate: z
        .string()
        .refine((str) => !isNaN(Date.parse(str)), { message: "Invalid date" }),
      priority: z.enum(["LOW", "HIGH", "MEDIUM"]),
    }),
  });

  const { mutateAsync, isLoading } = trpc.task.post.create.useMutation();
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
                  title: data.title,
                  priority: data.priority,
                  notes: data.note ?? "",
                  dueDate: new Date(Date.parse(data.dueDate)).toString(),
                });
                await utils.task.invalidate();

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
                  isInvalid={!!errors.title}
                  errorMessage={errors.title?.message}
                  {...register("title")}
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
                  <SelectItem key="LOW" value="LOW">
                    Low
                  </SelectItem>
                  <SelectItem key="MEDIUM" value="MEDIUM">
                    Medium
                  </SelectItem>
                  <SelectItem key="HIGH" value="HIGH">
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
                  isInvalid={!!errors.dueDate}
                  errorMessage={errors.dueDate?.message}
                  {...register("dueDate")}
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
