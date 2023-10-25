"use client";
import { useZodForm } from "@/hooks/useZodForm";
import { trpc } from "@/trpc/client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { TRPCClientError } from "@trpc/client";
import { MoveRightIcon, UserIcon } from "lucide-react";
import { Controller, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const reasonOptions = [
  {
    label: "I'm a student",
    value: "student",
  },
  {
    label: "I'm interested in the project",
    value: "project",
  },
  {
    label: "Both",
    value: "both",
  },
];

const insertWaitlist = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  reason: z.enum(["student", "project", "both"]),
});

export const WaitlistForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useZodForm({
    schema: insertWaitlist,
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const { mutateAsync } = trpc.waitlist.addToWaitlist.useMutation();

  const onSubmit: SubmitHandler<z.infer<typeof insertWaitlist>> = async (
    data,
  ) => {
    try {
      await mutateAsync(data);
      toast.success("You have been added to the waitlist!", {
        description: "We will be in touch when we are ready to onboard you!",
      });
      reset();
    } catch (error) {
      if (error instanceof TRPCClientError) {
        toast.error(error.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-6 flex max-w-md flex-col gap-3 lg:mt-12"
      noValidate
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            size="lg"
            radius="md"
            variant="bordered"
            startContent={<UserIcon size={20} />}
            label="Name"
            placeholder="John Doe"
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="email"
            size="lg"
            radius="md"
            variant="bordered"
            label="Email address"
            startContent={<UserIcon size={20} />}
            placeholder="use@example.com"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
          />
        )}
      />

      <Controller
        name="reason"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            name="reason"
            label="Why are you interested in Noodle?"
            aria-label="Why are you interested in Noodle?"
            variant="bordered"
            isInvalid={!!errors.reason}
            errorMessage={errors.reason?.message}
          >
            {reasonOptions.map((reason) => (
              <SelectItem key={reason.value} value={reason.value}>
                {reason.label}
              </SelectItem>
            ))}
          </Select>
        )}
      />

      <Button
        color="primary"
        type="submit"
        className="font-semibold"
        endContent={<MoveRightIcon size={20} />}
        isLoading={isSubmitting}
      >
        Join Waitlist
      </Button>
    </form>
  );
};
