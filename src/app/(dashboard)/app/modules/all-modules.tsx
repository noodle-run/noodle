"use client";

import { type IconNames } from "@/components/icon";
import { trpc } from "@/trpc/client";
import { type FC } from "react";
import { ModuleCard } from "../../_components/module-card";

export const AllModules: FC = () => {
  const [modules] = trpc.module.get.all.useSuspenseQuery();

  if (!modules) return null;

  return (
    <ul className="flex flex-wrap gap-4 pt-4">
      {modules.slice().map((module) => (
        <ModuleCard
          key={module.id}
          {...module}
          icon={module.icon as IconNames}
        />
      ))}
    </ul>
  );
};
