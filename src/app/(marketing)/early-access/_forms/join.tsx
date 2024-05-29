'use client';

import { api } from '@/lib/trpc/react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/primitives/button';
import { Checkbox } from '@/primitives/checkbox';
import { Input } from '@/primitives/input';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/primitives/select';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/primitives/form';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is too short' }),
  email: z.string().email({ message: 'Invalid email address' }).min(5),
  reason: z.enum(['student', 'project', 'both']).default('student'),
  agreement: z.boolean().default(false),
});

export const JoinEarlyAccessForm = () => {
  const { mutate: joinEarlyAccess, isPending } =
    api.earlyAccess.joinEarlyAccess.useMutation({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success('Thank you for joining the early access list!');
      },
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      reason: 'student',
      agreement: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.agreement) {
      joinEarlyAccess(values);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 flex max-w-[500px] flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row w-full gap-6">
          <div className="w-full space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="name"
                      type="text"
                      placeholder="John Doe"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="email"
                      placeholder="johndoe@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason of interest</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">I am a student</SelectItem>
                      <SelectItem value="project">
                        Interested in the project
                      </SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="agreement"
          render={({ field }) => (
            <FormItem className="flex gap-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-3"
                />
              </FormControl>
              <span className="text-balance text-sm leading-6 text-foreground-muted">
                By signing up, you agree to our{' '}
                <Link
                  href="/terms"
                  className={cn(
                    buttonVariants({ variant: 'link' }),
                    'p-0 before:w-full',
                  )}
                >
                  terms of service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className={cn(
                    buttonVariants({ variant: 'link' }),
                    'p-0 before:w-full',
                  )}
                >
                  privacy policy
                </Link>
                , also to be contacted by email about product updates and early
                access.
              </span>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-3"
          disabled={
            isPending ||
            form.formState.isSubmitting ||
            !form.formState.isValid ||
            !form.getValues('agreement')
          }
        >
          {isPending ? 'Joining...' : 'Join early access'}
        </Button>
      </form>
    </Form>
  );
};
