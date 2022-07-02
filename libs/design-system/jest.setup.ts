import '@testing-library/jest-dom';
import React, { ReactElement } from 'react';

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
