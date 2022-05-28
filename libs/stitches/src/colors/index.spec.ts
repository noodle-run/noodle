import { colors } from '.';
import { darkGroups } from './dark';
import { lightGroups } from './light';

describe('Color palette', () => {
  it('returns the same amount of colors for both light and dark variants', () => {
    expect(Object.values(colors.light).length).toBe(
      Object.values(colors.dark).length,
    );
  });

  it.each(Object.entries(colors.light))(
    'returns hsl format for %s light color',
    (_, value) => {
      expect(value.includes('hsl')).toBeTruthy();
    },
  );

  it.each(Object.entries(colors.dark))(
    'returns hsl format for %s dark color',
    (_, value) => {
      expect(value.includes('hsl')).toBeTruthy();
    },
  );

  it('returns the same groups for both light and dark colors', () => {
    expect(lightGroups).toStrictEqual(darkGroups);
  });
});
