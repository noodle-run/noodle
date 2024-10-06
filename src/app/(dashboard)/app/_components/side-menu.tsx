import { api } from '@/lib/trpc/server';
import {
  CircleHelpIcon,
  DiamondIcon,
  HomeIcon,
  MessageSquareMore,
  PenLineIcon,
} from 'lucide-react';
import Image from 'next/image';
import { ActiveButton } from './active-button';
import { CreateModulePopover } from './create-module-popover';
import type { IconNames } from '@/primitives/icon';
import { Icon } from '@/primitives/icon';
import { Button } from '@/primitives/button';
import { constants } from '@/constants';

const iconSize = 15;

const sideMenuStaticLinks = [
  {
    icon: <HomeIcon size={iconSize} />,
    label: 'Home',
    href: '/app',
  },
  {
    icon: <PenLineIcon size={iconSize} />,
    label: 'Notebooks',
    href: '/app/notes',
  },
  {
    icon: <DiamondIcon size={iconSize} />,
    label: 'Flashcards',
    href: '/app/flashcards',
  },
];

export async function SideMenu() {
  const modules = await api.modules.getUserModules();

  return (
    <aside className="flex w-[200px] flex-col justify-between gap-8">
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
            {modules
              .sort((a, b) => {
                return (
                  new Date(a.createdAt).getTime() -
                  new Date(b.createdAt).getTime()
                );
              })
              .map((module) => (
                <li key={module.id} className="flex flex-1 flex-col">
                  <ActiveButton
                    href={`/app/module/${module.id}`}
                    icon={
                      <Icon
                        name={
                          module.icon === 'default'
                            ? 'Folder'
                            : (module.icon as IconNames)
                        }
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
          <a
            href={constants.feedback}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquareMore size={15} strokeWidth={1.5} /> Feedback
          </a>
        </Button>
        <Button
          variant="ghost"
          className="justify-start gap-3 font-normal"
          asChild
        >
          <a href={constants.support} target="_blank" rel="noopener noreferrer">
            <CircleHelpIcon size={15} strokeWidth={1.5} /> Help & Support
          </a>
        </Button>
      </div>
    </aside>
  );
}
