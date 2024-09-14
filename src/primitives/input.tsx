import * as React from 'react';

import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const inputVariants = cva(
  'flex h-9 w-full rounded-md border-gray-subtle-border bg-gray-subtle px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-solid focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        outline:
          'border focus-visible:ring-1 focus-visible:ring-pink-solid-hover',
        ghost: '',
      },
    },
  },
);

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & VariantProps<typeof inputVariants>
>(({ className, type, variant = 'outline', ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(inputVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input, inputVariants };
