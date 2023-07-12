import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

export default {
  title: 'Design System / Typography / P',
  component: Typography.P,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
} as Meta<typeof Typography.P>;

type Story = StoryObj<typeof Typography.P>;

export const Default: Story = {
  name: 'P',
};
