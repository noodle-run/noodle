import { convertHexToRGBA } from '@/lib/colors';
import Link from 'next/link';
import { type FC } from 'react';
import colors, { zinc } from 'tailwindcss/colors';

interface ModuleCardProps {
  color: string;
  id: string;
  name: string;
  icon: string;
  credits: number;
}

export const ModuleCard: FC<ModuleCardProps> = ({
  id,
  color,
  name,
  icon,
  credits,
}) => {
  const moduleColor =
    color === 'default' ? zinc : colors[color as keyof typeof colors];

  return (
    <li className="shrink-0 basis-full lg:basis-[240px]">
      <Link
        href={`/app/module/${id}`}
        className="flex w-full flex-col gap-2 rounded-xl p-6"
        style={{
          background: `linear-gradient(135deg, ${convertHexToRGBA(
            moduleColor['500'],
            0.075,
          )} 0%, ${convertHexToRGBA(moduleColor['700'], 0.05)} 100%)`,
          border: `1px solid ${convertHexToRGBA(moduleColor['500'], 0.1)}`,
        }}
      >
        {icon}
        <h3 className="mt-2 font-medium">{name}</h3>
        <p className="text-xs text-gray-foreground-muted">{credits} Credits</p>
      </Link>
    </li>
  );
};
