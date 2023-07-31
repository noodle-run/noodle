import '@/styles/globals.css';
import 'react';

import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';
import type { FC, PropsWithChildren } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider, useTheme } from 'next-themes';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { api } from '@/utils/api';
import { type AppPropsWithLayout } from '@/utils/NextPageWithLayout';
import { seo } from '@/utils/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: 'variable',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: 'variable',
  display: 'swap',
});

const ThemedClerkProvider: FC<PropsWithChildren> = ({ children }) => {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) return null;

  return (
    <ClerkProvider
      appearance={{
        baseTheme:
          resolvedTheme === 'dark' ? dark : { __type: 'prebuilt_appearance' },
        variables: {
          colorPrimary: '#e64d67',
        },
        elements: {
          userButtonPopoverCard:
            'border border-gray-6 dark:border-graydark-6 bg-gray-2 dark:bg-graydark-2 w-[18rem] rounded-lg',
          navbar: 'border-r border-gray-6 dark:border-graydark-6',
          card: 'border border-gray-6 dark:border-graydark-6 bg-gray-2 dark:bg-graydark-2 rounded-lg',
          pageScrollBox: '',
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div className={`${inter.variable} ${jetBrainsMono.variable} font-sans`}>
      <DefaultSeo {...seo} />
      <ThemeProvider attribute="class">
        <ThemedClerkProvider>
          <WrapBalancerProvider>
            {getLayout(<Component {...pageProps} />)}
          </WrapBalancerProvider>
          <Analytics />
          <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
        </ThemedClerkProvider>
      </ThemeProvider>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.variable}, sans-serif;
          --font-jetbrains-mono: ${jetBrainsMono.variable}, monospace;
        }
      `}</style>
    </div>
  );
};

export default api.withTRPC(App);
