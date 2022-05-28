import { fontSizes } from './fontSizes';

describe('font sizes', () => {
  it.each(Object.entries(fontSizes))(
    'returns the value of %s in rem',
    (_, value) => {
      expect(value.endsWith('rem')).toBeTruthy();
    },
  );
});
