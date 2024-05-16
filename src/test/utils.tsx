import type { RenderOptions } from '@testing-library/react';
import type { PropsWithChildren, ReactElement } from 'react';

import { render } from '@testing-library/react';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
