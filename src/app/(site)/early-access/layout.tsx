import { TRPCReactProvider } from '@/lib/trpc/react';
import type { PropsWithChildren } from 'react';

export default function EarlyAccessLayout({ children }: PropsWithChildren) {
  return <TRPCReactProvider>{children}</TRPCReactProvider>;
}
