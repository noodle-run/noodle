import type { PropsWithChildren } from 'react';
import { SideMenu } from './_components/side-menu';
import { auth } from '@/lib/auth';
import { TopNavbar } from './_components/top-navbar';
import { SessionProvider } from 'next-auth/react';
import { TRPCReactProvider } from '@/lib/trpc/react';
import type { Session } from 'next-auth';

export default async function AppLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <SessionProvider>
      <TRPCReactProvider>
        <main className="flex min-h-dvh gap-4 p-4">
          <SideMenu />

          <div className="flex flex-1 flex-col rounded-xl border px-6 pb-6 pt-4">
            <TopNavbar session={session as Session} />
            {children}
          </div>
        </main>
      </TRPCReactProvider>
    </SessionProvider>
  );
}
