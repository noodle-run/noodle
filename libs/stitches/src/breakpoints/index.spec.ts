import { breakpoints } from '.';

describe('Breakpoints', () => {
  it.each(Object.entries(breakpoints))(
    'renders breakpoint %s with min-width',
    (_, value) => {
      expect(value.includes('min-width')).toBeTruthy();
    },
  );
});
