import type { Meta, StoryObj } from '@storybook/react';

import { TypographyH4 } from '.';

export default {
  title: 'Design System / Typography / H4',
  component: TypographyH4,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
} satisfies Meta<typeof TypographyH4>;

type Story = StoryObj<typeof TypographyH4>;

export const H4: Story = {};
