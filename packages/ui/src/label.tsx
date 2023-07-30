import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';

import { cn } from '@noodle/utils';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-11 dark:text-graydark-11 transition-colors',
);

const Label = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
