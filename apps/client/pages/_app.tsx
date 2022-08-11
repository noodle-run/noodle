import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { trpc } from '../utils/trpc';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <>
    <Head>
      <title>Noodle - Open Source Educational Platform</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <SessionProvider session={session as Session}>
      <Component {...pageProps} />
    </SessionProvider>
  </>
);

export default trpc.withTRPC(App);
