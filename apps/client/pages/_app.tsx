import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Welcome to client!</title>
    </Head>
    <main className="app">
      <Component {...pageProps} />
    </main>
  </>
);

export default App;
