import type { StorybookConfig } from '@storybook/core-common';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export default {
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    'storybook-addon-paddings',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(
          __dirname,
          '../apps/client/next.config.js',
        ),
      },
    },
  ],
  features: {
    interactionsDebugger: true,
    previewMdx2: true,
  },
  staticDirs: [
    path.resolve(__dirname, '../libs/stitches/src/assets'),
    path.resolve(__dirname, '../apps/client/public'),
  ],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    const modifiedConfig = config;
    const tsPaths = new TsconfigPathsPlugin({
      configFile: './tsconfig.base.json',
    });

    if (modifiedConfig.resolve) {
      if (modifiedConfig.resolve.plugins) {
        modifiedConfig.resolve.plugins.push(tsPaths);
      } else {
        modifiedConfig.resolve.plugins = [tsPaths];
      }
    }

    return modifiedConfig;
  },
} as StorybookConfig;
