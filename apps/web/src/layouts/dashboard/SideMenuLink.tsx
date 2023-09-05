import { type FC } from 'react';
import type { IconNames } from '@/components/Icon';
import { motion } from 'framer-motion';

import { Button } from '@noodle/ui';

import { ActiveLink } from '@/components/ActiveLink';
import { Icon } from '@/components/Icon';

type SideMenuLinkProps = {
  href: string;
  icon: IconNames;
  label: string;
  isSideMenuExpanded: boolean;
};

export const SideMenuLink: FC<SideMenuLinkProps> = ({
  href,
  icon,
  label,
  isSideMenuExpanded = true,
}) => {
  return (
    <li>
      <Button asChild variant="muted" className="w-full">
        <ActiveLink
          href={href}
          activeClassName="text-gray-12 dark:text-graydark-12"
        >
          <Icon name={icon} className="min-w-max" />
          <motion.span
            animate={{
              opacity: isSideMenuExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.span>
        </ActiveLink>
      </Button>
    </li>
  );
};
