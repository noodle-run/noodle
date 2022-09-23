import '@testing-library/jest-dom';
import React, { ReactElement } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserver;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock(
  'next/link',
  () =>
    ({ children, ...rest }: { children: ReactElement }) =>
      React.cloneElement(children, { ...rest }),
);

jest.mock(
  'next/image',
  () =>
    ({ src, alt }: { src: string; alt: string }) =>
      React.createElement('img', { src, alt }),
);

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
    };
  },
}));
