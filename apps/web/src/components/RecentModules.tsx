import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

import { Button } from '@noodle/ui';

import { ModuleSkeleton } from './ModuleSkeleton';

export const RecentModules = () => {
  const [height, setHeight] = useState<'auto' | number>('auto');

  return (
    <div className="border-gray-4 dark:border-graydark-4 flex flex-col rounded-xl border p-4">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold">Recently visited modules</h3>
        <Button
          variant="secondary"
          size="icon"
          className="px-2 py-1 text-xs"
          onClick={() => {
            setHeight((prev) => (prev === 'auto' ? 0 : 'auto'));
          }}
        >
          {height === 'auto' ? 'Hide' : 'Show'}
        </Button>
      </div>
      <AnimateHeight height={height}>
        <div className="mt-4 overflow-hidden">
          <div className="relative flex w-full gap-4">
            {Array.from(Array(6).keys()).map((_, i) => (
              <ModuleSkeleton variant="empty" key={i} />
            ))}
            <div className="absolute flex h-full w-full items-center justify-center">
              <span className="text-gray-8 dark:text-graydark-8 max-w-[35ch] text-center text-sm">
                When you decide to become a good student, the recent modules
                will appear here
              </span>
            </div>
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
};
