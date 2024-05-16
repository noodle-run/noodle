import type { Metadata } from 'next';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import './globals.css';

import { ThemeProvider } from 'next-themes';

import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Noodle - Rethinking Student Productivity',
    template: '%s - Noodle',
  },
  description:
    'Noodle is a productivity platform including many tools students need to be productive and stay on top of their work such as note taking, task management, and more.',
};

/**
 * The root layout component of the application.
 *
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
      <body>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
