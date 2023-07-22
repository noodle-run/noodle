import type { ReactElement, ReactNode } from 'react';
import { type NextPage } from 'next';
import { type AppProps } from 'next/app';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
