import * as RadixDropDown from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type DropdownMenuProps = {
  trigger: ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  list: {
    label: string;
    href: string;
    icon: ReactNode;
  }[];
};

export const DropdownMenu: FC<DropdownMenuProps> = ({
  trigger,
  list,
  side = 'top',
}) => {
  return (
    <RadixDropDown.Root>
      <RadixDropDown.Trigger asChild>{trigger}</RadixDropDown.Trigger>
      <RadixDropDown.Portal>
        <RadixDropDown.Content
          side={side}
          className="flex flex-col gap-1 px-3 py-2 text-black dark:text-white dark:bg-zinc-800 bg-zinc-100 rounded-2xl"
        >
          {list.map((item) => (
            <RadixDropDown.Item
              key={item.label}
              className="transition-colors focus-visible:border-none focus-visible:outline-none hover:bg-zinc-200 dark:hover:bg-zinc-700/50 rounded-xl"
            >
              <Link href={item.href}>
                <a className="flex items-center gap-6 px-3 text-sm h-9">
                  {item.icon}
                  {item.label}
                </a>
              </Link>
            </RadixDropDown.Item>
          ))}
          <RadixDropDown.Arrow className="dark:fill-zinc-800 fill-zinc-100" />
        </RadixDropDown.Content>
      </RadixDropDown.Portal>
    </RadixDropDown.Root>
  );
};
