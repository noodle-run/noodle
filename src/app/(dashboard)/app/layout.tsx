import {
  CircleHelpIcon,
  DiamondIcon,
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
import { Button } from '@/primitives/button';
import { UserButton } from '@clerk/nextjs';
import { CreateModulePopover } from './_components/create-module-popover';
import { api } from '@/lib/trpc/server';
import type { IconNames } from '@/primitives/icon';
import { Icon } from '@/primitives/icon';

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

export default async function AppLayout({ children }: PropsWithChildren) {
  const modules = await api.modules.getUserModules();

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
            <div className="flex items-center justify-between pl-4">
              <h3 className="text-xs text-gray">Modules</h3>
              <CreateModulePopover />
            </div>
            <ul className="flex flex-col">
              {modules.map((module) => (
                <li key={module.id} className="flex flex-1 flex-col">
                  <ActiveButton
                    href={`/modules/${module.id}`}
                    icon={
                      <Icon
                        name={module.icon as IconNames}
                        size={15}
                        strokeWidth={1.5}
                      />
                    }
                    label={module.name}
                  />
                </li>
              ))}
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
          <Button variant="ghost" size="icon" className="-ml-2">
            <PanelLeftCloseIcon strokeWidth={1.5} size={18} />
          </Button>
          <UserButton />
        </nav>

        {children}
      </div>
    </main>
  );
}
