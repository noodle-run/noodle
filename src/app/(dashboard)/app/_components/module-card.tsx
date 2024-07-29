import { convertHexToRGBA } from '@/lib/colors';
import { Icon, type IconNames } from '@/primitives/icon';
import { Skeleton } from '@/primitives/skeleton';
import Link from 'next/link';
import colors, { zinc } from 'tailwindcss/colors';

interface ModuleCardProps {
  color: string;
  id: string;
  name: string;
  icon: IconNames;
  credits: number;
}

export function ModuleCard({
  id,
  color,
  name,
  icon,
  credits,
}: ModuleCardProps) {
  const moduleColor =
    color === 'default' ? zinc : colors[color as keyof typeof colors];

  return (
    <li className="shrink-0 basis-full lg:basis-[250px]">
      <Link
        href={`/app/module/${id}`}
        className="flex w-full flex-col gap-2 rounded-xl p-6"
        style={{
          background: `linear-gradient(135deg, ${convertHexToRGBA(
            moduleColor['500'],
            0.08,
          )} 0%, ${convertHexToRGBA(moduleColor['700'], 0.05)} 100%)`,
          border: `1px solid ${convertHexToRGBA(moduleColor['500'], 0.1)}`,
        }}
      >
        <Icon name={icon} strokeWidth={2} size={20} />
        <h3 className="mt-2 text-lg font-medium">{name}</h3>
        <p className="text-xs text-gray-foreground-muted">{credits} Credits</p>
      </Link>
    </li>
  );
}

ModuleCard.Skeleton = function ModuleCardSkeleton({
  animate = true,
}: {
  animate?: boolean;
}) {
  return (
    <div className="flex h-[138px] w-[250px] flex-col gap-2 rounded-xl border  bg-gray-subtle p-6">
      <Skeleton noPulse={!animate} className="size-5" />
      <Skeleton noPulse={!animate} className="mt-2 h-6 w-[200px]" />
      <Skeleton noPulse={!animate} className="mt-1 h-4 w-[50px]" />
    </div>
  );
};
