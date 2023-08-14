import type { FC, PropsWithChildren } from 'react';

import { Brand } from '@noodle/ui';

import { FeedbackDialog } from './feedback';
import { DashboardNavbar } from './Navbar';
import { SideMenuLink } from './SideMenuLink';
import { SideMenuModules } from './SideMenuModules';
import { pageLinks } from './static-data';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen gap-6 p-6">
      {/* Side Menu */}
      <aside className="flex min-w-[220px] flex-col justify-between">
        <div>
          <Brand className="ml-4" size={35} />

          <ul className="mt-8 flex flex-col gap-2">
            {pageLinks.map((link) => (
              <SideMenuLink key={link.href} {...link} />
            ))}
          </ul>

          <SideMenuModules />
        </div>

        <FeedbackDialog />
      </aside>

      <div className="border-gray-3 dark:border-graydark-3 flex flex-1 flex-col overflow-scroll rounded-2xl border px-6 py-4">
        {/* Top Navigation Bar */}
        <DashboardNavbar />

        {/* Page Content */}
        <div className="flex h-full w-full overflow-scroll">{children}</div>
      </div>
    </div>
  );
};

export { DashboardLayout };
