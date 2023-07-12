import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

export default {
  title: 'Design System / Typography / H3',
  component: Typography.H3,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
} as Meta<typeof Typography.H3>;

type Story = StoryObj<typeof Typography.H3>;

export const Default: Story = {
  name: 'H3',
};
