import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type TRPCErrorResponse } from '@trpc/server/rpc';
import { z } from 'zod';

import { Button, Form } from '@noodle/ui';

import { api } from '@/utils/api';

const formSchema = z.object({
  invitationId: z.string(),
});

export const WaitListInvitationForm = ({
  invitationId,
}: {
  invitationId: string;
}) => {
  const utils = api.useContext();

  const { mutateAsync, isLoading } =
    api.waitlist.sendUserInvidation.useMutation({
      async onSuccess() {
        await utils.waitlist.invalidate();
      },
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      invitationId: invitationId,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync(values);
    } catch (error: unknown) {
      const err = error as TRPCErrorResponse['error'];
      console.log(err);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <Button
          type="submit"
          size="sm"
          className="inline-flex"
          variant="secondary"
        >
          {isLoading ? 'Sending...' : ' Send Invitation'}
        </Button>
      </form>
    </Form>
  );
};
