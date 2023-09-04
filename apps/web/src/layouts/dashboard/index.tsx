import { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { Brand } from '@noodle/ui';

import { FeedbackDialog } from './feedback';
import { DashboardNavbar } from './Navbar';
import { SideMenuLink } from './SideMenuLink';
import { SideMenuModules } from './SideMenuModules';
import { pageLinks } from './static-data';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const [isSideMenuExpanded, setSideMenuExpanded] = useState(true);

  return (
    <div className="flex h-screen gap-6 p-6">
      {/* Side Menu */}
      <motion.aside
        className="flex flex-col justify-between"
        animate={{ width: isSideMenuExpanded ? '181px' : '51px' }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <Brand className="ml-4" size={35} />

          <ul className="mt-8 flex flex-col gap-2">
            {pageLinks.map((link) => (
              <SideMenuLink
                key={link.href}
                {...link}
                isSideMenuExpanded={isSideMenuExpanded}
              />
            ))}
          </ul>
          <motion.div
            animate={{ opacity: isSideMenuExpanded ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <SideMenuModules />
          </motion.div>
        </div>

        <FeedbackDialog isSideMenuExpanded={isSideMenuExpanded} />
      </motion.aside>

      <div className="border-gray-3 dark:border-graydark-3 flex flex-1 flex-col overflow-scroll rounded-2xl border px-6 py-4">
        {/* Top Navigation Bar */}
        <DashboardNavbar
          setSideMenuExpanded={setSideMenuExpanded}
          isSideMenuExpanded={isSideMenuExpanded}
        />

        {/* Page Content */}
        <div className="flex h-full w-full overflow-scroll">{children}</div>
      </div>
    </div>
  );
};

export { DashboardLayout };
