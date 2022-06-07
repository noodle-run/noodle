import { StitchesProvider } from '@noodle/stitches';
import { withTRPC } from '@trpc/next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppRouter } from './api/trpc/[trpc]';

const App = ({ Component, pageProps }: AppProps) => (
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
    <StitchesProvider>
      <Component {...pageProps} />
    </StitchesProvider>
  </>
);

export default withTRPC<AppRouter>({
  config() {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
      : 'http://localhost:4200/api/trpc';

    return {
      url,
    };
  },
  ssr: false,
})(App);
