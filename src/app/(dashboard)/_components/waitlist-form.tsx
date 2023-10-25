"use client";

import { trpc } from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { TRPCClientError } from "@trpc/client";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  invitationId: z.number(),
});

export const WaitListInvitationForm = ({
  invitationId,
}: {
  invitationId: string;
}) => {
  const utils = trpc.useContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      invitationId: +invitationId,
    },
  });

  const { mutateAsync, isLoading } =
    trpc.waitlist.sendUserInvitation.useMutation({
      async onSuccess(data) {
        console.log(data);
        await utils.waitlist.invalidate();
      },
    });

  console.log(form.formState.errors);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync(values);
    } catch (error: unknown) {
      if (error instanceof TRPCClientError) {
        toast.error(error.message);
      }
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <Button type="submit" size="sm" className="inline-flex">
          {isLoading ? "Sending..." : " Send Invitation"}
        </Button>
      </form>
    </FormProvider>
  );
};
