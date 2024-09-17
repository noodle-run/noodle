import { PanelLeftCloseIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { Button } from '@/primitives/button';
import { SideMenu } from './_components/side-menu';
import { auth, signOut } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AppLayout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session) {
    return redirect('/');
  }

  return (
    <main className="flex min-h-dvh gap-4 p-4">
      <SideMenu />

      <div className="flex flex-1 flex-col rounded-xl border px-6 pb-6 pt-4">
        <nav className="mb-6 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="-ml-2">
            <PanelLeftCloseIcon strokeWidth={1.5} size={18} />
          </Button>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        </nav>

        {children}
      </div>
    </main>
  );
}
