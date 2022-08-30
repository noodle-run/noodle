import type { Preset, StorybookConfig } from '@storybook/core-common';
// eslint-disable-next-line import/no-relative-packages
import rootMain from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  addons: [...(rootMain.addons as Preset[]), '@nrwl/react/plugins/storybook'],
};

export default config;
