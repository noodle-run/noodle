import Link from 'next/link';
import { FC, ReactNode } from 'react';

type SidebarLinkProps = {
  icon: ReactNode;
  label: string;
  href: string;
};

export const SidebarLink: FC<SidebarLinkProps> = ({ icon, label, href }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className="flex items-center gap-3 p-3 transition-colors hover:dark:bg-zinc-800/50 hover:bg-zinc-100 rounded-xl">
        {icon}
        {label}
      </a>
    </Link>
  );
};
