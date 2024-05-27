'use client';

import * as React from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer flex size-[18px] shrink-0 items-center justify-center rounded-md border border-gray-subtle-border text-transparent shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-solid-hover disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-pink data-[state=checked]:bg-salmon data-[state=checked]:text-white dark:data-[state=checked]:text-black',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <CheckIcon className="size-4" strokeWidth={3} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
