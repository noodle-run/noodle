import { describe, expect, it } from 'bun:test';

import { cn } from './utils';

describe('utils', () => {
  it('should merge classes using cn function', () => {
    const classes = cn('text-black p-4', 'text-white');

    expect(classes).toBe('p-4 text-white');
  });
});
