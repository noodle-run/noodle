import type { Meta, StoryObj } from '@storybook/react';

import { TypographyH1 } from '.';

export default {
  title: 'Design System / Typography / H1',
  component: TypographyH1,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
} satisfies Meta<typeof TypographyH1>;

type Story = StoryObj<typeof TypographyH1>;

export const H1: Story = {};
