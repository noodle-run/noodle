import { type StorybookConfig } from '@storybook/react-vite';

import { baseConfig } from '@noodle/storybook-config';

const config = {
  ...baseConfig,
  stories: [
    ...baseConfig.stories,
    '../../**/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../**/src/**/*.mdx',
  ],
} satisfies StorybookConfig;

export default config;
