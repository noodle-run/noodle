import type { StorybookConfig } from '@storybook/core-common';
// eslint-disable-next-line import/no-relative-packages
import rootMain from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  addons: [...(rootMain.addons || []), '@nrwl/react/plugins/storybook'],
};

export default config;
