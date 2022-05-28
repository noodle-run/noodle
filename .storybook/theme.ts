import { create } from '@storybook/theming';

const base = {
  colorPrimary: '#fb607e',
  colorSecondary: '#fb607e',
};

export const dark = create({
  ...base,
  base: 'dark',
  appBg: '#171717',
  barBg: '#171717',
  appContentBg: '#171717',
  brandImage: 'https://i.postimg.cc/VshJtgbz/Group-27.png',
});

export const light = create({
  ...base,
  base: 'light',
  brandImage: 'https://i.postimg.cc/yY90YtpM/noodle-brand-light.png',
  appContentBg: '#ededed',
  appBg: '#ededed',
  barBg: '#ededed',
});
