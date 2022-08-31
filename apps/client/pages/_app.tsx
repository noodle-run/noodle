import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { nextSEO } from '../utils/next-seo.config';
import { trpc } from '../utils/trpc';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <>
    <DefaultSeo {...nextSEO} />
    <SessionProvider session={session as Session}>
      <Component {...pageProps} />
    </SessionProvider>
  </>
);

export default trpc.withTRPC(App);
