import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { type AppProps } from 'next/app';

import { type Session } from '@noodle/auth';

import '@/styles/globals.css';

import { api } from '@/utils/api';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface AppPropsWithSession extends AppProps {
  pageProps: {
    session: Session;
  };
}

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithSession) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(App);
