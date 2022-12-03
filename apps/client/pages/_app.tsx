import { Inter } from '@next/font/google';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { nextSEO } from '../utils/next-seo.config';
import { trpc } from '../utils/trpc';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

type PageProps = {
  session: Session;
};

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...nextSEO} />
    <SessionProvider session={(pageProps as PageProps).session}>
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  </>
);

export default trpc.withTRPC(App);
