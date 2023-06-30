import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="dark:bg-graydark-1 bg-gray-1 text-gray-12 dark:text-graydark-12">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
