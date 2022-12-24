import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { ProgressBar } from '../../atoms/ProgressBar';

type ModuleCardProps =
  | {
      variant?: 'default';
      href: string;
      icon: ReactNode;
      color: string;
      name: string;
      code: string;
      tasks?: number;
      progress?: number;
      credits?: number;
    }
  | {
      variant: 'loading';
      href?: undefined;
      icon?: undefined;
      color?: undefined;
      name?: undefined;
      code?: undefined;
      tasks?: undefined;
      progress?: undefined;
      credits?: undefined;
    };

export const ModuleCard: FC<ModuleCardProps> = ({
  variant = 'default',
  href,
  icon,
  name,
  code,
  tasks,
  progress,
  color,
  credits,
}) => {
  if (variant === 'loading') {
    return (
      <div
        role="status"
        className="h-[148px] min-w-[300px] animate-pulse rounded-2xl bg-zinc-100 dark:bg-zinc-800"
      />
    );
  }

  return (
    <Link
      href={href as string}
      className="block rounded-2xl bg-zinc-100 p-6 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 hover:dark:bg-zinc-700/50"
    >
      <span className="text-base lg:text-lg">{icon}</span>
      <h3 className="pt-2 text-base lg:text-lg">{name}</h3>
      <p className="pt-1 text-sm text-zinc-600 dark:text-zinc-400">{code}</p>
      {credits && (
        <p className="pt-1 pb-3 text-xs text-zinc-500">{credits} Credits</p>
      )}
      <div>
        {progress && tasks && (
          <div className="flex flex-col gap-1">
            <span className="pb-[2px] text-xs text-zinc-500">
              {tasks} {tasks === 1 ? 'task' : 'tasks'} remaining
            </span>
            <ProgressBar value={progress} color={color} />
          </div>
        )}
      </div>
    </Link>
  );
};
