import { create } from '@storybook/theming';
import { colors } from '../libs/stitches/src/colors';

const base = {
  colorPrimary: colors.dark.crimson11,
  colorSecondary: colors.dark.crimson11,
};

export const dark = create({
  ...base,
  base: 'dark',
  appBg: colors.dark.gray2,
  barBg: colors.dark.gray2,
  appContentBg: colors.dark.gray1,
  brandImage: 'https://i.postimg.cc/VshJtgbz/Group-27.png',
});

export const light = create({
  ...base,
  base: 'light',
  brandImage: 'https://i.postimg.cc/yY90YtpM/noodle-brand-light.png',
  appContentBg: colors.light.gray1,
  appBg: colors.light.gray2,
  barBg: colors.light.gray2,
});
