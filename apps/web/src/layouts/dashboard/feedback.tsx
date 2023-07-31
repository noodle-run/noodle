import { type FC } from 'react';
import AnimateHeight from 'react-animate-height';
import { useForm } from 'react-hook-form';
import { useUser } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { type TRPCErrorResponse } from '@trpc/server/rpc';
import { z } from 'zod';

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
  Typography,
} from '@noodle/ui';

import { Icon } from '@/components/Icon';
import { api } from '@/utils/api';

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(3),
});

const FeedbackForm: FC<{ email?: string | undefined }> = ({ email }) => {
  const { mutateAsync, isLoading, isSuccess } = api.feedback.add.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email ?? '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync(values);
      form.reset();
    } catch (error: unknown) {
      const err = error as TRPCErrorResponse['error'];
      form.setError('root', {
        type: 'manual',
        message: err.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-6" noValidate>
        <div className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[120px] resize-none"
                    placeholder="Your message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormMessage className="pt-2">
          {form.formState.errors.root?.message}
        </FormMessage>

        <AnimateHeight height={isSuccess ? 'auto' : 0}>
          <Typography.P className="text-teal-10 dark:text-tealdark-10 flex items-center gap-2 pt-2">
            <Icon name="check" />
            Thanks for your feedback!
          </Typography.P>
        </AnimateHeight>

        <DialogFooter className="pt-6">
          <Button type="submit" variant="inverse" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export const FeedbackDialog = () => {
  const { user } = useUser();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="muted" className="w-full">
          <Icon name="badge-help" />
          Provide feedback
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Provide feedback</DialogTitle>
          <DialogDescription>
            Got some thoughts to share? We&apos;d love to hear from you!
          </DialogDescription>
        </DialogHeader>

        {user && (
          <FeedbackForm email={user.primaryEmailAddress?.emailAddress} />
        )}
      </DialogContent>
    </Dialog>
  );
};
