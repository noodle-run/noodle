import type { Meta, StoryObj } from '@storybook/react';

import { TypographyH3 } from '.';

export default {
  title: 'Design System / Typography / H3',
  component: TypographyH3,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
} satisfies Meta<typeof TypographyH3>;

type Story = StoryObj<typeof TypographyH3>;

export const H3: Story = {};
