import { TRPCReactProvider } from '@/lib/trpc/react';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { PropsWithChildren } from 'react';

export default function EarlyAccessLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      appearance={{ baseTheme: dark, variables: { colorPrimary: '#F9617B' } }}
    >
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </ClerkProvider>
  );
}
