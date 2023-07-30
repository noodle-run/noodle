import type { FC, PropsWithChildren } from 'react';

import { Brand, Button } from '@noodle/ui';

import { ActiveLink } from '@/components/ActiveLink';
import { Icon } from '@/components/Icon';
import { FeedbackDialog } from './feedback';
import { pageLinks } from './static-data';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-8 p-8">
      <aside className="flex min-w-[220px] flex-col justify-between">
        <div>
          <div className="pl-4">
            <Brand size={35} />
          </div>

          <ul className="mt-8 flex flex-col gap-2">
            {pageLinks.map((link) => (
              <li key={link.href}>
                <Button asChild variant="secondary" className="w-full">
                  <ActiveLink
                    href={link.href}
                    activeClassName="text-gray-12 dark:text-graydark-12"
                  >
                    <Icon name={link.icon} />
                    <span>{link.label}</span>
                  </ActiveLink>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FeedbackDialog />
        </div>
      </aside>

      <div className="border-gray-3 dark:border-graydark-3 flex flex-1 rounded-xl border p-6">
        {children}
      </div>
    </div>
  );
};

export { DashboardLayout };
