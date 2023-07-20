import { type HTMLAttributes } from 'react';

import { cn } from '@noodle/utils';

export const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      role="presentation"
      className={cn(
        'bg-gray-3 dark:bg-graydark-3 animate-pulse rounded-lg',
        className,
      )}
      {...props}
    />
  );
};
