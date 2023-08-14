import { type FC } from 'react';
import type { IconNames } from '@/components/Icon';

import { Button } from '@noodle/ui';

import { ActiveLink } from '@/components/ActiveLink';
import { Icon } from '@/components/Icon';

type SideMenuLinkProps = {
  href: string;
  icon: IconNames;
  label: string;
};

export const SideMenuLink: FC<SideMenuLinkProps> = ({ href, icon, label }) => {
  return (
    <li>
      <Button asChild variant="muted" className="w-full">
        <ActiveLink
          href={href}
          activeClassName="text-gray-12 dark:text-graydark-12"
        >
          <Icon name={icon} />
          <span>{label}</span>
        </ActiveLink>
      </Button>
    </li>
  );
};
