import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@noodle/utils';

const buttonVariants = cva(
  'flex items-center gap-4 transition-colors text-sm rounded-md',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-700 dark:bg-primary-700 hover:bg-primary-900 hover:dark:bg-primary-900 text-gray-1 dark:text-graydark-12',
        secondary:
          'bg-gray-3 dark:bg-graydark-3 hover:bg-gray-4 hover:dark:bg-graydark-4 text-gray-11 dark:text-graydark-11 border border-gray-6 dark:border-graydark-6',
        muted:
          'text-gray-11 dark:text-graydark-11 hover:text-gray-12 hover:dark:text-graydark-12 hover:bg-gray-2 hover:dark:bg-graydark-2',
        inverse:
          'text-gray-1 dark:text-graydark-1 bg-gray-12 dark:bg-graydark-12 hover:bg-gray-12/80 hover:dark:bg-graydark-12/80 disabled:opacity-50',
      },
      size: {
        icon: 'p-2',
        sm: 'py-1.5 px-3',
        md: 'py-2 px-4',
      },
      center: {
        true: 'justify-center',
        false: 'justify-start',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      center: false,
    },
  },
);

export type ButtonProps = {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, center, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, center, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
