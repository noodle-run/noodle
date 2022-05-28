import { space } from '.';

describe('space', () => {
  it.each(Object.entries(space))(
    'returns the value of %s in rem',
    (_, value) => {
      expect(value.endsWith('rem')).toBeTruthy();
    },
  );
});
