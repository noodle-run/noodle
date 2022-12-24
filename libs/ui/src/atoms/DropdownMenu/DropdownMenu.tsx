import { Menu } from '@headlessui/react';
import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode } from 'react';

const menuContentStyles = cva(
  [
    'absolute',
    'left-0',
    'flex',
    'flex-col',
    'w-56',
    'gap-1',
    'p-2',
    'text-black',
    'origin-top-right',
    'dark:text-white',
    'dark:bg-zinc-800',
    'bg-zinc-200',
    'rounded-xl',
    'focus:outline-none',
  ],
  {
    variants: {
      pos: {
        top: ['top-0', '-translate-y-full'],
        bottom: ['translate-y-2'],
      },
    },
    defaultVariants: {
      pos: 'bottom',
    },
  },
);

type ListItem =
  | { onClick?: undefined; href: string; label: string; icon: ReactNode }
  | { onClick: () => void; href?: undefined; label: string; icon: ReactNode };

type DropdownMenuProps = VariantProps<typeof menuContentStyles> & {
  buttonAs?: 'button' | 'div';
  list: ListItem[];
};

export const DropdownMenu: FC<PropsWithChildren<DropdownMenuProps>> = ({
  children,
  list,
  pos,
  buttonAs,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button as={buttonAs}>{children}</Menu.Button>
      <Menu.Items as="ul" className={menuContentStyles({ pos })}>
        {list.map((item) => (
          <Menu.Item
            key={item.label}
            as="li"
            className="rounded-xl transition-colors hover:bg-zinc-300 ui-active:bg-zinc-300 dark:hover:bg-zinc-700/50 dark:ui-active:bg-zinc-700/50"
          >
            {item.href ? (
              <Link
                href={item.href}
                className="flex h-9 items-center gap-3 px-3 text-sm"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ) : (
              <button
                type="button"
                onClick={item.onClick}
                className="flex h-9 w-full items-center gap-3 px-3 text-sm"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
