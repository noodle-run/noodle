import type { PropsWithChildren } from 'react';

export default function LegalLayout({ children }: PropsWithChildren) {
  return <main className="mx-auto max-w-prose py-8 md:py-12">{children}</main>;
}
