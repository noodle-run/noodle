import { radii } from '.';

describe('radii', () => {
  it.each(Object.entries(radii))(
    'returns the value of %s in rem or px',
    (name, value) => {
      let unit = 'rem';
      if (name === 'none' || name === 'full') {
        unit = 'px';
      }
      expect(value.endsWith(unit)).toBeTruthy();
    },
  );
});
