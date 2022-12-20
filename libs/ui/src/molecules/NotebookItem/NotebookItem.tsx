import Link from 'next/link';
import { ComponentProps, FC } from 'react';
import { ModuleTag } from '../../atoms/ModuleTag';

type NotebookItemProps =
  | {
      variant: 'loading';
      icon?: undefined;
      title?: undefined;
      lastEdited?: undefined;
      label?: undefined;
      href?: undefined;
    }
  | {
      variant?: 'default';
      icon: string;
      title: string;
      lastEdited: string;
      label: ComponentProps<typeof ModuleTag>;
      href: string;
    };

export const NotebookItem: FC<NotebookItemProps> = ({
  variant = 'default',
  icon,
  title,
  lastEdited,
  label,
  href,
}) => {
  if (variant === 'loading') {
    return (
      <div
        role="status"
        className="w-full h-11 lg:h-12 dark:bg-zinc-800 bg-zinc-100 animate-pulse rounded-xl"
      />
    );
  }

  return (
    <Link
      href={href as string}
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
        {label && (
          <div className="flex items-center gap-3">
            <ModuleTag name={label.name} color={label.color} />
          </div>
        )}
      </div>
    </Link>
  );
};
