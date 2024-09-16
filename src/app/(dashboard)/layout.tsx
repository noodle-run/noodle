import { TRPCReactProvider } from '@/lib/trpc/react';
import { SessionProvider } from 'next-auth/react';
import type { PropsWithChildren } from 'react';

/**
 * The layout of the dashboard routes.
 * @param props The props of the layout.
 * @param props.children The children of the layout, which are all the routes under this route group.
 * @returns A react component.
 */
export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </SessionProvider>
  );
}
