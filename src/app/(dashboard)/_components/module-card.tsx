import { Icon, type IconNames } from "@/components/icon";
import { cn } from "@/utils/cn";
import { convertHexToRGBA, primary } from "@/utils/colors";
import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import { Spacer } from "@nextui-org/spacer";
import Link from "next/link";
import { type FC } from "react";
import colors from "tailwindcss/colors";

type ModuleCardProps = {
  color: string;
  id: number;
  name: string;
  icon: IconNames;
  credits: number;
};

export const ModuleCard: FC<ModuleCardProps> = ({
  id,
  color,
  name,
  icon,
  credits,
}) => {
  const moduleColor =
    color === "primary" ? primary : colors[color as keyof typeof colors];

  return (
    <li className="shrink-0 basis-full lg:basis-[275px]">
      <Link
        href={`/app/modules/${id}`}
        className="flex w-full flex-col gap-2 rounded-xl p-6"
        style={{
          background: `linear-gradient(135deg, ${convertHexToRGBA(
            moduleColor["500"],
            0.075,
          )} 0%, ${convertHexToRGBA(moduleColor["700"], 0.05)} 100%)`,
          border: `1px solid ${convertHexToRGBA(moduleColor["500"], 0.1)}`,
        }}
      >
        <Icon name={icon} size={24} />
        <h3 className="mt-3">{name}</h3>
        <p className="text-tiny text-default-600">{credits} Credits</p>

        <div className="mt-3 flex flex-col gap-2">
          <p className="text-tiny text-default-500">8 Tasks remaining</p>
          <div className="relative h-2">
            <div className="absolute left-0 top-0 h-2 w-full overflow-hidden rounded-full bg-default-100" />
            <div
              className="absolute left-0 top-0 h-2 rounded-full"
              style={{ width: "50%", background: moduleColor["500"] }}
            />
          </div>
        </div>
      </Link>
    </li>
  );
};

export const ModuleCardSkeleton = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <Card
      className={cn(
        "shrink-0 basis-full border border-default-100 p-6 lg:basis-[275px]",
        isLoaded && "opacity-50",
      )}
      radius="lg"
      shadow="none"
    >
      <Skeleton className="w-6 rounded-md" isLoaded={isLoaded}>
        <div className="h-6 rounded-md bg-default-100"></div>
      </Skeleton>
      <Spacer y={6} />
      <Skeleton className="w-2/3 rounded-md" isLoaded={isLoaded}>
        <div className="h-6 w-full rounded-md bg-default-100"></div>
      </Skeleton>
      <Spacer y={2} />
      <Skeleton className="w-1/3 rounded-md" isLoaded={isLoaded}>
        <div className="h-4 w-full rounded-md bg-default-100"></div>
      </Skeleton>
      <Spacer y={4} />
      <Skeleton className="w-3/5 rounded-md" isLoaded={isLoaded}>
        <div className="h-4 w-3/5 rounded-md bg-default-100"></div>
      </Skeleton>
      <Spacer y={2} />
      <Skeleton className="w-full rounded-full" isLoaded={isLoaded}>
        <div className="h-3 w-full rounded-full bg-default-100"></div>
      </Skeleton>
    </Card>
  );
};
