import type { Metadata } from 'next';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import './globals.css';

import { ThemeProvider } from 'next-themes';

import type { PropsWithChildren } from 'react';

import { constructMetadata } from '@/lib/utils';
import { TRPCReactProvider } from '@/lib/trpc/react';

export const metadata: Metadata = constructMetadata();

/**
 * The root layout component of the application.
 * @param props The props of the root layout.
 * @param props.children The children of the root layout which is every page in
 *   the application.
 * @returns A react component representing the root layout.
 */
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      appearance={{ baseTheme: dark, variables: { colorPrimary: '#F9617B' } }}
    >
      <html
        lang="en"
        suppressHydrationWarning
        className={`${GeistSans.variable} ${GeistMono.variable}`}
      >
        <body>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
