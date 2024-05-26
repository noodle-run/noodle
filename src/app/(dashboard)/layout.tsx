import { TRPCReactProvider } from '@/lib/trpc/react';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { PropsWithChildren } from 'react';

/**
 * The layout of the dashboard routes, this supplies the clerk & trpc providers mainly.
 * @param props The props of the layout.
 * @param props.children The children of the layout, which are all the routes under this route group.
 * @returns A react component.
 */
export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      appearance={{ baseTheme: dark, variables: { colorPrimary: '#F9617B' } }}
    >
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </ClerkProvider>
  );
}
