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
      <div className="mt-6 flex gap-4">
        <div className="mt-2">
          <Icon
            name={module.icon as IconNames}
            color="white"
            size={36}
            strokeWidth={1.5}
          />
        </div>
        <TypographyH2 className="mt-0 font-semibold">
          {module.name}
        </TypographyH2>
      </div>
      <div className="mr-24 mt-3 flex gap-4 p-2">
        <p
          className="rounded-full bg-pink-400 px-2"
          style={{
            backgroundColor: moduleColor["500"],
            color: getTextColor(moduleColor["500"]),
          }}
        >
          {module.code}
        </p>

        <p className="flex items-center gap-2 text-gray-400">
          <Icon name="Scale" size={18} />
          {module.credits} Credit{module.credits == 1 ? "" : "s"}
        </p>
        <p className="flex items-center gap-2 text-gray-400">
          <Icon name="Clock" size={18} /> Created{" "}
          {getRelativeTime(new Date(module.createdAt))}
        </p>
      </div>
    </div>
  );
};
