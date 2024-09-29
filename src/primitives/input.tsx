import * as React from 'react';

import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const inputVariants = cva(
  'flex h-9 w-full rounded-md border border-gray-subtle-border bg-gray-subtle px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-solid focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-solid-hover disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        outline: 'bg-gray-element',
      },
      scale: {
        default: '',
        md: 'h-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      scale: 'default',
    },
  },
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, scale = 'default', variant = 'default', ...props },
    ref,
  ) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, scale }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
