import type { PropsWithChildren } from 'react';

export default function LegalLayout({ children }: PropsWithChildren) {
  return <main className="mx-auto max-w-prose py-12">{children}</main>;
}
