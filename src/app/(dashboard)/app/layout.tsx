import {
  DiamondIcon,
  HomeIcon,
  ListChecksIcon,
  PenLineIcon,
  PuzzleIcon,
} from 'lucide-react';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import { ActiveButton } from './_components/active-button';

const iconSize = 15;

const sideMenuStaticLinks = [
  {
    icon: <HomeIcon size={iconSize} />,
    label: 'Home',
    href: '/app',
  },
  {
    icon: <PuzzleIcon size={iconSize} />,
    label: 'Modules',
    href: '/modules',
  },
  {
    icon: <ListChecksIcon size={iconSize} />,
    label: 'Tasks',
    href: '/tasks',
  },
  {
    icon: <PenLineIcon size={iconSize} />,
    label: 'Notebooks',
    href: '/notes',
  },
  {
    icon: <DiamondIcon size={iconSize} />,
    label: 'Flashcards',
    href: '/flashcards',
  },
];

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-dvh gap-8 p-4">
      <aside className="w-[220px]">
        <div className="flex items-center gap-3 pl-3 pt-4">
          <Image src="/logo.svg" width={35} height={35} alt="Noodle Logo" />
          <span>Noodle</span>
        </div>

        <ul className="mt-8">
          {sideMenuStaticLinks.map(({ icon, label, href }) => (
            <li key={label}>
              <ActiveButton icon={icon} label={label} href={href} />
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex-1 rounded-lg border p-6">{children}</div>
    </main>
  );
}
