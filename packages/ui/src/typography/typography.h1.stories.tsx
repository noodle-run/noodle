import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

export default {
  title: 'Design System / Typography / H1',
  component: Typography.H1,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
} as Meta<typeof Typography.H1>;

type Story = StoryObj<typeof Typography.H1>;

export const Default: Story = {
  name: 'H1',
};
