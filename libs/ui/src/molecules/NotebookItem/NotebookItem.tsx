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
        className="h-11 w-full animate-pulse rounded-xl bg-zinc-100 dark:bg-zinc-800 lg:h-12"
      />
    );
  }

  return (
    <Link
      href={href as string}
      className="flex items-center justify-between rounded-xl bg-zinc-100 transition-colors hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700/50"
    >
      <span className="flex flex-1 items-center gap-3 truncate px-5 py-3">
        <span className="text-sm lg:text-base">{icon}</span>
        <span className="truncate text-sm text-zinc-700 dark:text-zinc-300 lg:text-base">
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
