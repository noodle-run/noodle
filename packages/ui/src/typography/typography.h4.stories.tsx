import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

export default {
  title: 'Design System / Typography / H4',
  component: Typography.H4,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
} as Meta<typeof Typography.H4>;

type Story = StoryObj<typeof Typography.H4>;

export const Default: Story = {
  name: 'H4',
};
