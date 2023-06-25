import { ThemeProvider } from 'next-themes';
import { type AppProps } from 'next/app';

import '@/styles/globals.css';

import { api } from '@/utils/api';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default api.withTRPC(App);
