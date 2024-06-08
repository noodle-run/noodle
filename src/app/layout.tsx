import type { Metadata } from 'next';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import './globals.css';

import { ThemeProvider } from 'next-themes';

import type { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { constructMetadata } from '@/lib/utils';
import { Toaster } from '@/primitives/sonner';
import dynamic from 'next/dynamic';
import { PHProvider } from './providers';

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
});

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <PHProvider>
        <body>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <PostHogPageView />
            {children}
            <Toaster />
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </body>
      </PHProvider>
    </html>
  );
}
