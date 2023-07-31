import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

import { cn } from '@noodle/utils';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'border-gray-6 dark:border-graydark-6 bg-gray-3 dark:bg-graydark-3 ring-offset-gray-3 dark:ring-offset-graydark-3 placeholder:text-gray-9 dark:placeholder:text-graydark-9 focus-visible:ring-gray-6 dark:focus-visible:ring-graydark-6 flex h-10 w-full rounded-md border px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
