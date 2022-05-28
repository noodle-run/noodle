import { lineHeights } from './lineHeights';

describe('line heights', () => {
  it.each(Object.entries(lineHeights))(
    'returns the value of %s as a number',
    (_, value) => {
      expect(typeof value).toBe('number');
    },
  );
});
