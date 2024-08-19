'use client';

import { Button } from '@/primitives/button';
import { Input } from '@/primitives/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/primitives/popover';
import { ResizablePanel } from '@/primitives/resizable-panel';
import { Separator } from '@/primitives/separator';
import { ChevronRightIcon, PlusIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/primitives/form';
import { Label } from '@/primitives/label';
import type { IconNames } from '@/primitives/icon';
import { Icon, iconNames } from '@/primitives/icon';
import { grayDark } from '@radix-ui/colors';
import { colorChoices } from '../lib/color-choices';
import { ScrollArea } from '@/primitives/scroll-area';
import { api } from '@/lib/trpc/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Textarea } from '@/primitives/textarea';

interface StepHeadingProps {
  title: string;
  description: string;
}

const StepHeading = ({ title, description }: StepHeadingProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="font-medium text-foreground">{title}</div>
      <div className="max-w-[40ch] text-sm text-gray-foreground-muted">
        {description}
      </div>
      <Separator className="my-3" />
    </div>
  );
};

const formSchema = z.object({
  name: z.string().min(2),
  description: z.string(),
  code: z.string().min(2),
  credits: z.string(),
  icon: z.string().min(1),
  color: z.string().min(1),
});

export function CreateModulePopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const router = useRouter();

  const mutation = api.modules.create.useMutation({
    onError(error) {
      toast.error(error.message);
    },
    onSuccess() {
      router.refresh();
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      code: '',
      credits: '0',
      icon: 'default',
      color: 'default',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await mutation.mutateAsync({
      ...values,
      credits: parseInt(values.credits),
    });
    form.reset({
      name: '',
      code: '',
      credits: '0',
      icon: 'default',
      color: 'default',
    });
  }

  return (
    <Popover
      open={popoverOpen}
      onOpenChange={() => {
        setPopoverOpen((prev) => !prev);
        setStep(1);
      }}
    >
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8">
          <PlusIcon size={15} strokeWidth={1.5} />
        </Button>
      </PopoverTrigger>

      <PopoverContent side="right" className="w-[328px]">
        <ResizablePanel>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
              {step === 1 && (
                <div>
                  <StepHeading
                    title="Create a new module"
                    description="A module is like a hub for a subject's study material such as notes, flashcards...etc"
                  />
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs text-foreground">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Artificial Intelligence"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs text-foreground">
                            Description (optional)
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              className="resize-none"
                              placeholder="Type here..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex items-start justify-between gap-3">
                      <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-foreground">
                              Code
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="AI001"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="credits"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-foreground">
                              Credits
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="15"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="mt-1 flex flex-1 flex-col gap-2">
                        <Label className="text-xs text-foreground">Icon</Label>
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1 justify-between bg-gray-subtle px-3 py-2 hover:bg-gray-element"
                          style={{
                            color:
                              form.watch('color') === 'default'
                                ? grayDark.gray10
                                : colorChoices.find(
                                    (color) =>
                                      color.name === form.watch('color'),
                                  )?.value,
                          }}
                          onClick={() => {
                            setStep(2);
                          }}
                        >
                          <Icon
                            name={
                              form.watch('icon') !== 'default'
                                ? (form.watch('icon') as IconNames)
                                : 'Folder'
                            }
                            size={18}
                            strokeWidth={1.5}
                          />

                          <ChevronRightIcon
                            className="text-gray-solid"
                            size={18}
                            strokeWidth={1.5}
                          />
                        </Button>
                      </div>
                      <div className="mt-1 flex flex-1 flex-col space-y-2">
                        <Label className="text-xs text-foreground">Color</Label>
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1 justify-between bg-gray-subtle px-3 py-2 hover:bg-gray-element"
                          onClick={() => {
                            setStep(3);
                          }}
                        >
                          <div
                            className="size-[18px] rounded-md"
                            style={{
                              backgroundColor:
                                form.watch('color') === 'default'
                                  ? grayDark.gray10
                                  : colorChoices.find(
                                      (color) =>
                                        color.name === form.watch('color'),
                                    )?.value,
                            }}
                          />

                          <ChevronRightIcon
                            className="text-gray-solid"
                            size={18}
                            strokeWidth={1.5}
                          />
                        </Button>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="!mt-4 w-full"
                      size="sm"
                    >
                      {form.formState.isSubmitting
                        ? 'Creating...'
                        : 'Create module'}
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <StepHeading
                    title="Select an icon"
                    description="You can select an icon for your module to make it easier to identify."
                  />
                  <ScrollArea className="h-[300px]">
                    <div className="mt-2 grid grid-cols-6 gap-2">
                      {iconNames.map((icon) => (
                        <button
                          type="button"
                          key={icon}
                          className="grid place-items-center rounded-lg p-2 text-foreground transition-colors hover:bg-gray-element"
                          onClick={() => {
                            form.setValue('icon', icon);
                            setStep(1);
                          }}
                        >
                          <Icon name={icon} size={20} strokeWidth={1.5} />
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}

              {step === 3 && (
                <div>
                  <StepHeading
                    title="Select a color"
                    description="You can select a color for your module to be able to identify it easily."
                  />
                  <div className="mt-2 flex flex-wrap justify-between gap-4">
                    {colorChoices.map((color) => (
                      <button
                        type="button"
                        key={color.name}
                        className="size-8 rounded-lg transition-all hover:scale-110"
                        style={{ backgroundColor: color.value }}
                        onClick={() => {
                          form.setValue('color', color.name);
                          setStep(1);
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </form>
          </Form>
        </ResizablePanel>
      </PopoverContent>
    </Popover>
  );
}
