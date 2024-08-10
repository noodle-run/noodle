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
import { Icon } from '@/primitives/icon';
import { grayDark } from '@radix-ui/colors';

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
  name: z.string(),
  code: z.string(),
  credits: z.number(),
  icon: z.string(),
  color: z.string(),
});

export function CreateModulePopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      code: '',
      credits: 0,
      icon: 'default',
      color: 'default',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                    <div className="flex items-center justify-between gap-3">
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
                    <div className="flex items-center justify-between gap-3">
                      <div className="mt-1 flex flex-1 flex-col gap-2">
                        <Label className="text-xs text-foreground">Icon</Label>
                        <Button
                          variant="outline"
                          className="flex-1 justify-between bg-gray-subtle px-3 py-2 hover:bg-gray-element"
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
                                  : form.watch('color'),
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
                    <Button type="submit" className="!mt-4 w-full" size="sm">
                      Create module
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
                </div>
              )}

              {step === 3 && (
                <div>
                  <StepHeading
                    title="Select a color"
                    description="You can select a color for your module to be able to identify it easily."
                  />
                </div>
              )}
            </form>
          </Form>
        </ResizablePanel>
      </PopoverContent>
    </Popover>
  );
}
