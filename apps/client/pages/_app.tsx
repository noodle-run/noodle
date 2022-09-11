import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { nextSEO } from '../utils/next-seo.config';
import { trpc } from '../utils/trpc';

type CustomAppProps = AppProps & {
  pageProps: {
    session: Session;
  };
};

const App = ({ Component, pageProps }: CustomAppProps) => (
  <>
    <DefaultSeo {...nextSEO} />
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  </>
);

export default trpc.withTRPC(App);
