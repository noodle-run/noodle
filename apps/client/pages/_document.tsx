import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="dark:bg-zinc-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
