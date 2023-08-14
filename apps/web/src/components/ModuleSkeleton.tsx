import { type FC } from 'react';

import { Skeleton } from '@noodle/ui';
import { cn } from '@noodle/utils';

type ModuleSkeletonProps = {
  variant?: 'default' | 'empty';
};

export const ModuleSkeleton: FC<ModuleSkeletonProps> = ({
  variant = 'default',
}) => {
  return (
    <Skeleton
      className={cn(
        'flex h-[176px] w-[253px] shrink-0 grow-0 basis-[253px] flex-col gap-3 rounded-lg p-4',
        variant === 'empty' &&
          'bg-gray-2/50 dark:bg-graydark-2/50 animate-none',
      )}
    >
      <Skeleton
        className={cn(
          'bg-gray-3 dark:bg-graydark-3 h-6 w-6 rounded-lg',
          variant === 'empty' && 'animate-none opacity-50',
        )}
      />
      <Skeleton
        className={cn(
          'bg-gray-3 dark:bg-graydark-3 h-4 w-full rounded-lg',
          variant === 'empty' && 'animate-none opacity-50',
        )}
      />
      <Skeleton
        className={cn(
          'bg-gray-3 dark:bg-graydark-3 h-4 w-16 rounded-lg',
          variant === 'empty' && 'animate-none opacity-50',
        )}
      />
      <Skeleton
        className={cn(
          'bg-gray-3 dark:bg-graydark-3 mt-3 h-4 w-24 rounded-lg',
          variant === 'empty' && 'animate-none opacity-50',
        )}
      />
      <Skeleton
        className={cn(
          'bg-gray-3 dark:bg-graydark-3 h-4 w-full rounded-lg',
          variant === 'empty' && 'animate-none opacity-50',
        )}
      />
    </Skeleton>
  );
};
