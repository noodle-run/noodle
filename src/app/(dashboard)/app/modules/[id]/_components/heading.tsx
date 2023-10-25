"use client";

import { TypographyH2 } from "@/components/TypographyH2";
import { TypographyH4 } from "@/components/TypographyH4";
import { Icon, type IconNames } from "@/components/icon";
import { trpc } from "@/trpc/client";
import { getTextColor, primary } from "@/utils/colors";
import { getRelativeTime } from "@/utils/date";
import colors from "tailwindcss/colors";

export const Heading = ({ id }: { id: number }) => {
  const [module] = trpc.module.get.byId.useSuspenseQuery({ id });

  const moduleColor =
    module?.color === "primary"
      ? primary
      : colors[module?.color as keyof typeof colors];

  if (!module) {
    return null;
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: moduleColor["500"],
        }}
        className="mt-6 inline-block rounded-xl p-2"
      >
        <Icon
          name={module.icon as IconNames}
          color={getTextColor(moduleColor["500"])}
          size={36}
          strokeWidth={1.5}
        />
      </div>
      <TypographyH2 className="mt-3">{module.name}</TypographyH2>
      <TypographyH4 className="opacity-70">{module.code}</TypographyH4>
      <p className="mt-3 flex items-center gap-2 opacity-75">
        <Icon name="Scale" size={18} />
        Worth {module.credits} Credits
      </p>
      <p className="mt-1 flex items-center gap-2 opacity-75">
        <Icon name="Clock" size={18} /> Created{" "}
        {getRelativeTime(new Date(module.createdAt))}
      </p>
    </div>
  );
};
