import { type FC } from 'react';

import { Skeleton } from '@noodle/ui';
import { cn } from '@noodle/utils';

type TaskSkeletonProps = {
  variant?: 'default' | 'empty';
};

export const TaskSkeleton: FC<TaskSkeletonProps> = ({
  variant = 'default',
}) => {
  return (
    <div className={cn('flex gap-4', variant === 'empty' && 'opacity-50')}>
      <div>
        <Skeleton
          className={cn('h-5 w-5', variant === 'empty' && 'animate-none')}
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <Skeleton
          className={cn('h-4 w-full', variant === 'empty' && 'animate-none')}
        />
        <Skeleton
          className={cn('h-4 w-20', variant === 'empty' && 'animate-none')}
        />
        <Skeleton
          className={cn('h-4 w-10', variant === 'empty' && 'animate-none')}
        />
      </div>
    </div>
  );
};
