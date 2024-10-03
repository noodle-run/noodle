import { constants } from '@/constants';
import { signOut } from '@/lib/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/primitives/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/primitives/dropdown-menu';
import { getColorForUsername } from '@/utils/colors';
import {
  CircleHelpIcon,
  CreditCardIcon,
  LogOutIcon,
  MessageSquareMore,
  SettingsIcon,
} from 'lucide-react';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import type { Session } from 'next-auth';
import Link from 'next/link';
import { ThemeDropdownSub } from './theme-dropdown-sub';

function getInitials(
  name: string | null | undefined,
  email: string | null | undefined,
): string {
  if (name) {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  if (email) {
    const [localPart, domain] = email.split('@');

    if (!localPart || !domain) {
      return '?';
    }

    if (!localPart[0] || !domain[0]) {
      return '?';
    }

    return (localPart[0] + (domain ? domain[0] : '')).toUpperCase();
  }
  return '?';
}

export function UserProfileDropdown({ session }: { session: Session }) {
  const userColor = getColorForUsername(
    session.user.name ?? session.user.email ?? '',
  );
  const initials = getInitials(session.user.name, session.user.email);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-8">
          <AvatarImage src={session.user.image ?? ''} />
          <AvatarFallback
            style={{
              ...userColor,
            }}
            className="font-medium"
          >
            {initials}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-56">
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/app/settings/billing">
            <CreditCardIcon strokeWidth={1.5} className="mr-2 size-4" />
            Billing
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/app/settings/account">
            <SettingsIcon strokeWidth={1.5} className="mr-2 size-4" />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <a
            href={constants.github_repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub strokeWidth={1.5} className="mr-2 size-4" />
            GitHub
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <a href={constants.discord} target="_blank" rel="noopener noreferrer">
            <FaDiscord strokeWidth={1.5} className="mr-2 size-4" />
            Discord
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <a href="mailto:feedback@noodle.run">
            <MessageSquareMore strokeWidth={1.5} className="mr-2 size-4" />
            Feedback
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <a href="mailto:support@noodle.run">
            <CircleHelpIcon strokeWidth={1.5} className="mr-2 size-4" />
            Support
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <ThemeDropdownSub />
        <DropdownMenuItem>
          <form
            action={async () => {
              'use server';
              await signOut({ redirectTo: '/' });
            }}
          >
            <button type="submit" className="flex items-center">
              <LogOutIcon strokeWidth={1.5} className="mr-2 size-4" />
              Sign Out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
