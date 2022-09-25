import Link from 'next/link';
import { ComponentProps, FC, ReactNode } from 'react';
import { ProgressBar } from '../../atoms/ProgressBar';

type ModuleCardProps = {
  href: string;
  icon: ReactNode;
  color: ComponentProps<typeof ProgressBar>['color'];
  name: string;
  code: string;
  tasks: number;
  progress: number;
};

export const ModuleCard: FC<ModuleCardProps> = ({
  href,
  icon,
  name,
  code,
  tasks,
  progress,
  color,
}) => {
  return (
    <Link href={href}>
      <a className="block p-6 transition-colors hover:dark:bg-zinc-700/50 hover:bg-zinc-200 bg-zinc-100 dark:bg-zinc-800 rounded-2xl">
        <span className="text-lg">{icon}</span>
        <h3 className="pt-2 text-lg">{name}</h3>
        <p className="pt-1 pb-3 text-sm dark:text-zinc-400 text-zinc-600">
          {code}
        </p>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-zinc-500">
            {tasks} {tasks === 1 ? 'task' : 'tasks'} remaining
          </span>
          <ProgressBar value={progress} color={color} />
        </div>
      </a>
    </Link>
  );
};
