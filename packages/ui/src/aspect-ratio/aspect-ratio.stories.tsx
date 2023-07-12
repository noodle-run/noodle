import { type FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AspectRatio } from '.';

const component: FC<{ ratio: number }> = ({ ratio }) => (
  <div className="w-[450px] overflow-hidden">
    <AspectRatio ratio={ratio}>
      <img
        src="https://source.unsplash.com/random/450x450"
        className="object-cover"
        alt="random"
      />
    </AspectRatio>
  </div>
);

export default {
  title: 'UI / Aspect Ratio',
  component,
  args: {
    ratio: 16 / 9,
  },
} as Meta<typeof component>;

type Story = StoryObj<typeof component>;

export const _16_9: Story = {};

export const _1_1: Story = {
  args: {
    ratio: 1,
  },
};

export const _4_3: Story = {
  args: {
    ratio: 4 / 3,
  },
};
