import Link from 'next/link';
import { ComponentProps, FC } from 'react';
import { ModuleTag } from '../../atoms/ModuleTag';
import { StarButton } from '../../atoms/StarButton';

type NotebookItemProps = {
  emoji: string;
  title: string;
  lastEdited: string;
  label: ComponentProps<typeof ModuleTag>;
  defaultStarred: boolean;
  href: string;
};

export const NotebookItem: FC<NotebookItemProps> = ({
  emoji,
  title,
  lastEdited,
  label,
  href,
  defaultStarred,
}) => {
  return (
    <Link href={href}>
      <a className="flex items-center justify-between dark:bg-zinc-800 bg-zinc-100 rounded-xl">
        <span className="flex items-center flex-1 gap-3 px-5 py-3">
          <span>{emoji}</span>
          <span className="text-zinc-700 dark:text-zinc-300">{title}</span>
        </span>
        <div className="flex items-center gap-3 pl-3 pr-5">
          <p className="text-xs text-zinc-500">{lastEdited}</p>
          <div className="flex items-center gap-6">
            <ModuleTag {...label} />
            <StarButton isStarred={defaultStarred} />
          </div>
        </div>
      </a>
    </Link>
  );
};
