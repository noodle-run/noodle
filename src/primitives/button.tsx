import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';

import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-subtle-border focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-br from-salmon to-pink text-white hover:opacity-90 dark:text-black',
        destructive: 'bg-red text-white hover:bg-red-solid-hover',
        outline:
          'border border-gray-subtle-border bg-gray-element text-foreground-muted hover:bg-gray-element-hover hover:text-foreground',
        ghost:
          'text-foreground-muted hover:bg-gray-element hover:text-foreground',
        link: 'relative bg-gradient-to-br from-salmon to-pink bg-clip-text text-transparent before:absolute before:bottom-0 before:h-px before:w-[calc(100%-24px)] before:rounded-full before:bg-gradient-to-br before:from-salmon before:to-pink hover:opacity-90',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'px-3 py-1.5',
        lg: 'px-3 py-1.5 lg:px-4 lg:py-2 lg:text-base',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
