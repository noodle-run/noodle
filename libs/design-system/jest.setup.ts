import '@testing-library/jest-dom';
import React, { ReactElement } from 'react';

jest.mock(
  'next/link',
  () =>
    ({ children, ...rest }: { children: ReactElement }) =>
      React.cloneElement(children, { ...rest }),
);
