'use client';

import { ScrollArea, ScrollBar } from '@/primitives/scroll-area';
import { ModuleCard } from './module-card';
import { Button } from '@/primitives/button';
import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

export function RecentModules() {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="mt-6 overflow-hidden rounded-xl border px-6 py-4">
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
          <ul className="mb-2 mt-4 flex gap-4">
            <ModuleCard
              id="123"
              color="default"
              credits={15}
              icon="Airplay"
              name="Information Security"
            />
          </ul>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </AnimateHeight>
    </div>
  );
}
