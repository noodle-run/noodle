import { signOut } from '@/lib/auth';
import { getColorForUsername } from '@/lib/colors';
import { Avatar, AvatarFallback, AvatarImage } from '@/primitives/avatar';
import { Button } from '@/primitives/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/primitives/dropdown-menu';
import { LogOutIcon, PanelLeftCloseIcon } from 'lucide-react';
import type { Session } from 'next-auth';

export function TopNavbar({ session }: { session: Session }) {
  const userColor = getColorForUsername(session.user.name ?? '');

  return (
    <nav className="mb-6 flex items-center justify-between">
      <Button variant="ghost" size="icon" className="-ml-2">
        <PanelLeftCloseIcon strokeWidth={1.5} size={18} />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session.user.image ?? ''} />
            <AvatarFallback
              style={{
                ...userColor,
              }}
              className="font-medium"
            >
              {session.user.name
                ?.split(' ')
                .map((name) => name[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
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
    </nav>
  );
}
