import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { type AppProps } from 'next/app';

import { type Session } from '@noodle/auth';

import '@/styles/globals.css';

import { SessionProvider } from 'next-auth/react';

import { api } from '@/utils/api';
import { seo } from '@/utils/seo';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface MyAppProps extends AppProps {
  pageProps: {
    session: Session;
  };
}

const App = ({ Component, pageProps }: MyAppProps) => {
  return (
    <>
      <DefaultSeo {...seo} />
      <SessionProvider session={pageProps.session}>
        <ThemeProvider attribute="class">
          <WrapBalancerProvider>
            <Component {...pageProps} />
          </WrapBalancerProvider>
          <Analytics />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(App);
