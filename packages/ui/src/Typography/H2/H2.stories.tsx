import type { Meta, StoryObj } from '@storybook/react';

import { TypographyH2 } from '.';

export default {
  title: 'Design System / Typography / H2',
  component: TypographyH2,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
} satisfies Meta<typeof TypographyH2>;

type Story = StoryObj<typeof TypographyH2>;

export const H2: Story = {};
