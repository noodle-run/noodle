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
        'bg-gray-2 dark:bg-graydark-2 animate-pulse rounded-lg',
        className,
      )}
      {...props}
    />
  );
};
