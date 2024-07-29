'use client';

import { Button } from '@/primitives/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/primitives/popover';
import { ResizablePanel } from '@/primitives/resizable-panel';
import { Separator } from '@/primitives/separator';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';

interface StepHeadingProps {
  title: string;
  description: string;
}

const StepHeading = ({ title, description }: StepHeadingProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="font-semibold">{title}</div>
      <div className="max-w-[40ch] text-sm text-gray-foreground-muted">
        {description}
      </div>
      <Separator className="mb-3 mt-1.5" />
    </div>
  );
};

export function CreateModulePopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);

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
          {step === 1 && (
            <div>
              <StepHeading
                title="Create a new module"
                description="A module is like a hub for a subject's study material such as notes, flashcards...etc"
              />
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

          <Button
            onClick={() => {
              setStep((prev) => (prev === 3 ? 1 : prev === 2 ? 3 : 2));
            }}
          >
            Next
          </Button>
        </ResizablePanel>
      </PopoverContent>
    </Popover>
  );
}
