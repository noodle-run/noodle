import type { FC, PropsWithChildren } from 'react';

import { Brand } from '@noodle/ui';

import { ActiveLink } from '../../components/ActiveLink';
import { Icon } from '../../components/Icon';
import { pageLinks } from './static-data';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-8 p-8">
      <aside className="min-w-[220px]">
        <div className="pl-4">
          <Brand size={35} />
        </div>

        <ul className="mt-8 flex flex-col gap-2">
          {pageLinks.map((link) => (
            <li key={link.href}>
              <ActiveLink
                href={link.href}
                activeClassName="text-gray-12 dark:text-graydark-12"
                className="text-gray-11 dark:text-graydark-11 hover:text-gray-12 hover:dark:text-graydark-12 hover:bg-gray-2 hover:dark:bg-graydark-2 flex w-full items-center gap-4 rounded-lg px-4 py-2 text-sm transition-colors"
              >
                <Icon name={link.icon} />
                <span>{link.label}</span>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </aside>

      <div className="border-gray-3 dark:border-graydark-3 flex-1 rounded-xl border p-6">
        {children}
      </div>
    </div>
  );
};

export { DashboardLayout };
