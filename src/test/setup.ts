import { GlobalRegistrator } from '@happy-dom/global-registrator';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'bun:test';

GlobalRegistrator.register();

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
