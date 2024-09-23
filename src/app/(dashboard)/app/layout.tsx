import { LogOutIcon, PanelLeftCloseIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { Button } from '@/primitives/button';
import { SideMenu } from './_components/side-menu';
import { auth, signOut } from '@/lib/auth';
import { redirect } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/primitives/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/primitives/avatar';
import { getColorForUsername } from '@/lib/utils';

export default async function AppLayout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session) {
    return redirect('/');
  }

  const userColor = getColorForUsername(session.user.name ?? '');

  return (
    <main className="flex min-h-dvh gap-4 p-4">
      <SideMenu />

      <div className="flex flex-1 flex-col rounded-xl border px-6 pb-6 pt-4">
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
                    await signOut();
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

        {children}
      </div>
    </main>
  );
}
