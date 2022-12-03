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

type DropdownMenuProps = VariantProps<typeof menuContentStyles> & {
  buttonAs?: 'button' | 'div';
  list: {
    label: string;
    href: string;
    icon: ReactNode;
  }[];
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
            key={item.href}
            as="li"
            className="transition-colors ui-active:bg-zinc-300 dark:ui-active:bg-zinc-700/50 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-700/50"
          >
            <Link
              className="flex items-center gap-3 px-3 text-sm h-9"
              href={item.href}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
