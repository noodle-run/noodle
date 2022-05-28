import { letterSpacings } from './letterSpacings';

describe('letter spacings', () => {
  it.each(Object.entries(letterSpacings))(
    'returns the value of %s in em',
    (_, value) => {
      expect(value.endsWith('em')).toBeTruthy();
    },
  );
});
