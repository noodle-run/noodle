import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './typography.js';

export default {
  title: 'UI / Typography',
  component: Typography,
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {};
