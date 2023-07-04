import type { Meta, StoryObj } from '@storybook/react';

import { Brand } from '.';

export default {
  title: 'Design System / Brand',
  component: Brand,
  args: {
    size: 100,
  },
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 50,
        max: 200,
        step: 10,
      },
    },
  },
} satisfies Meta<typeof Brand>;

type Story = StoryObj<typeof Brand>;

export const _Brand: Story = {};
