import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { type AppProps } from 'next/app';

import '@/styles/globals.css';

import { api } from '@/utils/api';
import { seo } from '@/utils/seo';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...seo} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
};

export default api.withTRPC(App);
