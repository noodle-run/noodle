import {
  BellIcon,
  CircleHelpIcon,
  DiamondIcon,
  FolderIcon,
  HomeIcon,
  ListChecksIcon,
  MessageSquareMore,
  PanelLeftCloseIcon,
  PenLineIcon,
  PuzzleIcon,
} from 'lucide-react';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import { ActiveButton } from './_components/active-button';
import { CreatePlusDropdownMenu } from './_components/create-plus-dropdown-menu';
import { Button } from '@/primitives/button';
import { UserButton } from '@clerk/nextjs';

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
    <main className="flex min-h-dvh gap-4 p-4">
      <aside className="flex w-[200px] flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 pl-3 pt-4">
            <Image src="/logo.svg" width={35} height={35} alt="Noodle Logo" />
            <span>Noodle</span>
          </div>

          <ul className="mt-8 flex flex-col">
            {sideMenuStaticLinks.map(({ icon, label, href }) => (
              <li key={label} className="flex flex-1 flex-col">
                <ActiveButton icon={icon} label={label} href={href} />
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-2">
            <h3 className="pl-4 text-xs text-gray">Modules</h3>
            <ul className="flex flex-col">
              <li className="flex flex-1 flex-col">
                <ActiveButton
                  href="/modules/ai"
                  icon={<FolderIcon size={15} strokeWidth={1.5} />}
                  label="Artificial Intelligence"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6 flex flex-col">
          <Button
            variant="ghost"
            className="justify-start gap-3 font-normal"
            asChild
          >
            <a href="mailto:feedback@noodle.run">
              <MessageSquareMore size={15} strokeWidth={1.5} /> Feedback
            </a>
          </Button>
          <Button
            variant="ghost"
            className="justify-start gap-3 font-normal"
            asChild
          >
            <a href="mailto:support@noodle.run">
              <CircleHelpIcon size={15} strokeWidth={1.5} /> Help & Support
            </a>
          </Button>
        </div>
      </aside>

      <div className="flex flex-1 flex-col rounded-xl border px-6 pb-6 pt-4">
        <nav className="mb-6 flex items-center justify-between">
          <div>
            <Button variant="ghost" size="icon" className="-ml-2">
              <PanelLeftCloseIcon strokeWidth={1.5} size={18} />
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <CreatePlusDropdownMenu />
            <Button variant="ghost" size="icon">
              <BellIcon size={18} />
            </Button>
            <UserButton />
          </div>
        </nav>

        {children}
      </div>
    </main>
  );
}
