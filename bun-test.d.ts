import { type TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import { type expect } from 'bun:test';

declare module 'bun:test' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Matchers<T = unknown>
    extends TestingLibraryMatchers<
      ReturnType<typeof expect.stringContaining>,
      T
    > {}
}
