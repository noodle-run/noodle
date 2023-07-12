import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

export default {
  title: 'Design System / Typography / H2',
  component: Typography.H2,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
} as Meta<typeof Typography.H2>;

type Story = StoryObj<typeof Typography.H2>;

export const Default: Story = {
  name: 'H2',
};
