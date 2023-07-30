import '../styles/globals.css';

import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';
import { ClerkProvider } from '@clerk/nextjs';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { api } from '../utils/api';
import { type AppPropsWithLayout } from '../utils/NextPageWithLayout';
import { seo } from '../utils/seo';

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

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div className={`${inter.variable} ${jetBrainsMono.variable} font-sans`}>
      <DefaultSeo {...seo} />
      <ClerkProvider {...pageProps}>
        <ThemeProvider attribute="class">
          <WrapBalancerProvider>
            {getLayout(<Component {...pageProps} />)}
          </WrapBalancerProvider>
          <Analytics />
          <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
        </ThemeProvider>
      </ClerkProvider>
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
