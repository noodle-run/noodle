import Link from 'next/link';
import { ComponentProps, FC } from 'react';
import { ModuleTag } from '../../atoms/ModuleTag';

type NotebookItemProps = {
  icon: string;
  title: string;
  lastEdited: string;
  label: ComponentProps<typeof ModuleTag>;
  href: string;
};

export const NotebookItem: FC<NotebookItemProps> = ({
  icon,
  title,
  lastEdited,
  label,
  href,
}) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-between transition-colors dark:bg-zinc-800 bg-zinc-100 rounded-xl dark:hover:bg-zinc-700/50 hover:bg-zinc-100"
    >
      <span className="flex items-center flex-1 gap-3 px-5 py-3 truncate">
        <span className="text-sm lg:text-base">{icon}</span>
        <span className="text-sm truncate lg:text-base text-zinc-700 dark:text-zinc-300">
          {title}
        </span>
      </span>
      <div className="flex items-center gap-3 pr-5">
        <p className="text-xs text-zinc-500">{lastEdited}</p>
        <div className="flex items-center gap-3">
          <ModuleTag {...label} />
        </div>
      </div>
    </Link>
  );
};
