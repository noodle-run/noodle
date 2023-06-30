import fetch from 'cross-fetch';

import '@testing-library/jest-dom';

import { server } from './mocks/server';
import { mockNextAuth } from './renderer';

global.fetch = fetch;

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

mockNextAuth({});
