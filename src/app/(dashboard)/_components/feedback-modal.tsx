"use client";

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
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { TRPCClientError } from "@trpc/client";
import { MailIcon, MessageSquarePlusIcon } from "lucide-react";
import { Controller, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const insertFeedback = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(500, { message: "Message must be less than 500 characters long." }),
});

export default function FeedbackModal({ email }: { email: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
  } = useZodForm({
    schema: insertFeedback,
    defaultValues: {
      email,
      message: "",
    },
  });

  const { mutateAsync } = trpc.feedback.submit.useMutation();

  const onSubmit: SubmitHandler<z.infer<typeof insertFeedback>> = async (
    data,
  ) => {
    try {
      await mutateAsync(data);
      reset();
      onOpenChange();
      toast.success("Thank you for your feedback!");
    } catch (error) {
      if (error instanceof TRPCClientError) {
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      <Button
        startContent={<MessageSquarePlusIcon size={18} />}
        className="w-full justify-start text-default-500 hover:text-default-900"
        variant="light"
        size="md"
        onPress={onOpen}
      >
        Provide Feedback
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="md"
        radius="lg"
        backdrop="blur"
        scrollBehavior="inside"
        className="border border-default-200 bg-default-50 dark:border-default-100"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Provide Feedback
                <span className="text-sm font-normal text-default-500">
                  Got some thoughts to share? We&apos;d love to hear from you!
                </span>
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        size="lg"
                        radius="md"
                        isClearable
                        onClear={() => setValue("email", "")}
                        variant="bordered"
                        startContent={<MailIcon size={20} />}
                        label="Email address"
                        labelPlacement="outside"
                        placeholder="user@example.com"
                        className="pb-3"
                        isInvalid={!!errors.email}
                        errorMessage={errors.email?.message}
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="message"
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        type="text"
                        size="lg"
                        radius="md"
                        variant="bordered"
                        autoFocus
                        label="Message"
                        labelPlacement="outside"
                        placeholder="Your message here..."
                        isInvalid={!!errors.message}
                        errorMessage={errors.message?.message}
                      />
                    )}
                  />

                  <ModalFooter className="px-0">
                    <Button variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      className="font-semibold"
                      isLoading={isSubmitting}
                    >
                      Submit
                    </Button>
                  </ModalFooter>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
