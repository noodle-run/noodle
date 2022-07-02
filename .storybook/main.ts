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
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    const modifiedConfig = config;
    const tsPaths = new TsconfigPathsPlugin({
      configFile: './tsconfig.base.json',
    });

    if (modifiedConfig.resolve) {
      if (modifiedConfig.resolve.plugins) {
        // @ts-expect-error tsPaths is a webpack plugin
        modifiedConfig.resolve.plugins.push(tsPaths);
      } else {
        // @ts-expect-error tsPaths is a webpack plugin
        modifiedConfig.resolve.plugins = [tsPaths];
      }
    }

    return modifiedConfig;
  },
} as StorybookConfig;
