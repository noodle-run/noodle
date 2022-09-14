import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/900.css';
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
