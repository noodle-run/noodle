import type { PropsWithChildren } from 'react';

import { Navbar } from './_components/navbar';

/**
 * The root layout component of the marketing group of pages.
 *
 * @param props The props of the layout.
 * @param props.children The children of the layout which is every page in the
 *   marketing layout group.
 * @returns A react component representing the layout.
 */
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <div className="absolute left-0 top-0 z-[-1] h-36 w-full bg-gradient-to-b from-indigo-subtle to-background" />
      <Navbar />
      <div className="container">{children}</div>
    </main>
  );
}
