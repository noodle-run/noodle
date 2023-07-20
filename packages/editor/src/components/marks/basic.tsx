import type { PlateLeafProps } from '@udecode/plate';
import { PlateLeaf } from '@udecode/plate';

import { cn } from '@noodle/utils';

const BoldLeaf = ({ children, className, ...props }: PlateLeafProps) => {
  return (
    <PlateLeaf
      asChild
      className={cn('text-gray-12 dark:text-graydark-12 font-bold', className)}
      {...props}
    >
      <strong>{children}</strong>
    </PlateLeaf>
  );
};

const ItalicLeaf = ({ children, className, ...props }: PlateLeafProps) => {
  return (
    <PlateLeaf
      asChild
      className={cn('text-gray-12 dark:text-graydark-12', className)}
      {...props}
    >
      <em>{children}</em>
    </PlateLeaf>
  );
};

const UnderlineLeaf = ({ children, className, ...props }: PlateLeafProps) => {
  return (
    <PlateLeaf
      asChild
      className={cn(
        'text-gray-12 dark:text-graydark-12 underline-offset-2',
        className,
      )}
      {...props}
    >
      <u>{children}</u>
    </PlateLeaf>
  );
};

const StrikethroughLeaf = ({
  children,
  className,
  ...props
}: PlateLeafProps) => {
  return (
    <PlateLeaf
      asChild
      className={cn('text-gray-12 dark:text-graydark-12', className)}
      {...props}
    >
      <s>{children}</s>
    </PlateLeaf>
  );
};

const SubscriptLeaf = ({ children, className, ...props }: PlateLeafProps) => {
  return (
    <PlateLeaf
      asChild
      className={cn('text-gray-12 dark:text-graydark-12', className)}
      {...props}
    >
      <sub>{children}</sub>
    </PlateLeaf>
  );
};

const SuperscriptLeaf = ({ children, className, ...props }: PlateLeafProps) => {
  return (
    <PlateLeaf
      asChild
      className={cn('text-gray-12 dark:text-graydark-12', className)}
      {...props}
    >
      <sup>{children}</sup>
    </PlateLeaf>
  );
};

const CodeLeaf = ({ children, className, ...props }: PlateLeafProps) => {
  return (
    <PlateLeaf
      asChild
      className={cn(
        'bg-gray-4 dark:bg-graydark-4 border-gray-6 dark:border-graydark-6 rounded-md border px-1.5 py-1 font-mono text-sm',
        className,
      )}
      {...props}
    >
      <code>{children}</code>
    </PlateLeaf>
  );
};

export {
  BoldLeaf,
  ItalicLeaf,
  UnderlineLeaf,
  StrikethroughLeaf,
  SubscriptLeaf,
  SuperscriptLeaf,
  CodeLeaf,
};
