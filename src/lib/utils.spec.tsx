import { afterEach, describe, expect, it } from 'bun:test';

import { cn, constructMetadata, getBaseUrl } from './utils';

describe('utils', () => {
  const originalWindow = window;

  afterEach(() => {
    window = originalWindow;
  });

  it('should merge classes using cn function', () => {
    // eslint-disable-next-line tailwindcss/classnames-order, tailwindcss/no-contradicting-classname
    const classes = cn('text-black p-4', 'text-white');

    expect(classes).toBe('p-4 text-white');
  });

  it('should get the base URL', () => {
    Object.defineProperty(window, 'location', {
      value: new URL('http://example.com'),
      configurable: true,
    });

    expect(getBaseUrl()).toBe('http://example.com');
  });

  it('should get the base vercel url when available', () => {
    // @ts-expect-error window needs to be undefined
    window = undefined;

    process.env['VERCEL_URL'] = 'example.com';

    expect(getBaseUrl()).toBe('https://example.com');
  });

  it('should construct metadata', () => {
    Object.defineProperty(window, 'location', {
      value: new URL('http://example.com'),
      configurable: true,
    });

    const metadata = constructMetadata({
      title: 'hello',
      description: 'world',
    });

    expect(metadata.title).toBe('hello');
    expect(metadata.description).toBe('world');
  });
});
