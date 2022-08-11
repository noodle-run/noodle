import { Preset, StorybookConfig } from '@storybook/core-common';
// eslint-disable-next-line import/no-relative-packages
import rootMain from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,
  addons: [...(rootMain.addons as Preset[]), '@nrwl/react/plugins/storybook'],
  core: {
    builder: 'webpack5',
  },
};

export default config;
