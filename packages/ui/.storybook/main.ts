import { type StorybookConfig } from '@storybook/react-vite';

import { baseConfig } from '@noodle/storybook-config';

const config = {
  ...baseConfig,
} satisfies StorybookConfig;

export default config;
