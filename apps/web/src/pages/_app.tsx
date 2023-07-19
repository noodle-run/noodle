import '../styles/globals.css';

import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { type AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import { type Session } from '@noodle/auth';

import { Navbar } from '../components/Navbar';
import { api } from '../utils/api';
import { seo } from '../utils/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: 'variable',
  display: 'swap',
});

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface MyAppProps extends AppProps {
  pageProps: {
    session: Session;
  };
}

const App = ({ Component, pageProps }: MyAppProps) => {
  return (
    <div className={`${inter.variable} font-sans`}>
      <DefaultSeo {...seo} />
      <SessionProvider session={pageProps.session}>
        <ThemeProvider attribute="class">
          <WrapBalancerProvider>
            <Navbar />
            <Component {...pageProps} />
          </WrapBalancerProvider>
          <Analytics />
        </ThemeProvider>
      </SessionProvider>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.variable}, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default api.withTRPC(App);