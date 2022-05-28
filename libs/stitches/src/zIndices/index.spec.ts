import { zIndices } from '.';

describe('z indices', () => {
  it.each(Object.entries(zIndices))(
    'returns the value of %s as a number',
    (_, value) => {
      expect(typeof value).toBe('number');
    },
  );
});
