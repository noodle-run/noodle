import { create } from '@storybook/theming';

const base = {
  colorPrimary: '#fa617b',
  colorSecondary: '#fa617b',
};

export const dark = create({
  ...base,
  base: 'dark',
  appBg: '#18181b',
  barBg: '#18181b',
  appContentBg: '#18181b',
  brandImage: 'https://i.postimg.cc/VshJtgbz/Group-27.png',
});

export const light = create({
  ...base,
  base: 'light',
  brandImage: 'https://i.postimg.cc/yY90YtpM/noodle-brand-light.png',
  appContentBg: '#fafafa',
  appBg: '#f4f4f5',
  barBg: '#f4f4f5',
});
