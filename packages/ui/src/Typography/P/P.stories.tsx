import type { Meta, StoryObj } from '@storybook/react';

import { TypographyP } from '.';

export default {
  title: 'Design System / Typography / P',
  component: TypographyP,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
} satisfies Meta<typeof TypographyP>;

type Story = StoryObj<typeof TypographyP>;

export const P: Story = {};
