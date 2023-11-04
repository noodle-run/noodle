"use client";

import { type IconNames } from "@/components/icon";
import { trpc } from "@/trpc/client";
import { cn } from "@/utils/cn";
import { Button } from "@nextui-org/react";
import { Suspense, useState, type FC } from "react";
import AnimateHeight from "react-animate-height";
import { ErrorBoundary } from "react-error-boundary";
import { ModuleCard, ModuleCardSkeleton } from "./module-card";

const RecentModulesInner: FC = () => {
  const [modules] = trpc.module.get.all.useSuspenseQuery();

  if (!modules) return null;

  return (
    <ul
      className={cn(
        "flex gap-4 overflow-x-auto pb-4 pt-2",
        modules.length === 0 && "relative overflow-hidden",
      )}
    >
      {modules.length === 0 && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <p className="max-w-[40ch] text-sm text-default-300">
            When you decide to become a good student and create modules, your
            recent ones will show up here.
          </p>
        </div>
      )}

      {modules.length === 0 &&
        new Array(8)
          .fill(0)
          .map((_, i) => <ModuleCardSkeleton key={i} isLoaded={true} />)}

      {modules
        .slice()
        .sort((a, b) => Date.parse(b.lastVisited) - Date.parse(a.lastVisited))
        .slice(0, 8)
        .map((module) => (
          <ModuleCard
            key={module.id}
            {...module}
            icon={module.icon as IconNames}
          />
        ))}
    </ul>
  );
};

export const RecentModules = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mt-4 flex flex-col rounded-large border border-default-200 px-6 py-4 dark:border-default-50">
      <div className="flex justify-between">
        <h2 className="text-large font-semibold">Recent Modules</h2>
        <Button
          variant="faded"
          size="sm"
          className="min-w-min px-2 text-tiny text-default-500"
          radius="md"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "Hide" : "Show"}
        </Button>
      </div>
      <AnimateHeight height={isExpanded ? "auto" : 0}>
        <ErrorBoundary fallback={<div>Failed to load modules</div>}>
          <Suspense
            fallback={
              <ul className="flex gap-4 overflow-x-auto pb-4 pt-2">
                {new Array(8).fill(0).map((_, i) => (
                  <ModuleCardSkeleton key={i} isLoaded={false} />
                ))}
              </ul>
            }
          >
            <RecentModulesInner />
          </Suspense>
        </ErrorBoundary>
      </AnimateHeight>
    </div>
  );
};
