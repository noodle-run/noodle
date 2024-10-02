'use client';

import { ScrollArea, ScrollBar } from '@/primitives/scroll-area';
import { ModuleCard } from './module-card';
import { Button } from '@/primitives/button';
import AnimateHeight from 'react-animate-height';
import { useState } from 'react';
import type { RouterOutputs } from '@/lib/trpc/types';
import { cn } from '@/utils/cn';
import type { IconNames } from '@/primitives/icon';

interface RecentModulesProps {
  modules: RouterOutputs['modules']['getUserModules'];
}

export function RecentModules({ modules }: RecentModulesProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="mt-6 overflow-hidden rounded-xl border px-4 py-3">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">Recent Modules</h2>
        <Button
          variant="outline"
          size="sm"
          className="text-xs"
          aria-expanded={isExpanded}
          aria-controls="recent-modules-list"
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
        >
          {isExpanded ? 'Hide' : 'Show'}
        </Button>
      </div>
      <AnimateHeight id="recent-modules-list" height={isExpanded ? 'auto' : 0}>
        <ScrollArea>
          <ul
            className={cn(
              'relative mt-4 flex gap-4',
              modules.length === 0 && 'overflow-hidden',
            )}
          >
            {modules.length === 0 && (
              <>
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                  <p className="max-w-[40ch] text-center text-sm text-gray-foreground-muted">
                    When you decide to become a good student and create modules,
                    your recent ones will show up here.
                  </p>
                </div>
                {new Array(8).fill(0).map((_, i) => (
                  <ModuleCard.Skeleton key={i} opacity={50} animate={false} />
                ))}
              </>
            )}

            {modules.length > 0 &&
              modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  {...module}
                  icon={
                    module.icon === 'default'
                      ? 'Folder'
                      : (module.icon as IconNames)
                  }
                />
              ))}
          </ul>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </AnimateHeight>
    </div>
  );
}
