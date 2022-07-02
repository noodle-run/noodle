import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Star } from './Star';

const args: ComponentProps<typeof Star> = {
  size: 24,
  filled: false,
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Star',
  component: Star,
  args,
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 0,
        max: 256,
        step: 4,
      },
    },
  },
};

export default config;

export const Normal: Story<typeof args> = (props) => <Star {...props} />;
Normal.storyName = 'Star';
