import React, { useState } from 'react';

import { cn } from '@noodle/utils';

export type InputProps = {
  icon: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const [isInputHovered, setIsInputHovered] = useState(false);
    const [isInputActive, setIsInputActive] = useState(false);

    return (
      <div
        className={cn(
          'bg-gray-4 dark:bg-graydark-4 border-gray-6 dark:border-graydark-6 flex w-full items-center rounded-lg border pl-4 transition-colors',
          isInputHovered && 'bg-gray-3 dark:bg-graydark-3',
          isInputActive && 'bg-gray-2 dark:bg-graydark-2',
        )}
      >
        <div className="text-gray-11 dark:text-graydark-11 flex h-[22px] w-[22px] items-center">
          {icon}
        </div>
        <input
          ref={ref}
          {...props}
          type={type}
          className={cn(
            'placeholder:text-gray-10 dark:placeholder:text-graydark-10 flex-1 bg-transparent p-4 text-base outline-none',
            className,
          )}
          onMouseEnter={() => {
            setIsInputHovered(true);
          }}
          onMouseLeave={() => {
            setIsInputHovered(false);
          }}
          onFocus={() => {
            setIsInputActive(true);
          }}
          onBlur={() => {
            setIsInputActive(false);
          }}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
