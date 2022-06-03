import type { StorybookConfig } from '@storybook/core-common';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export default {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
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
