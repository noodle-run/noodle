import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
} from 'react-icons/fi';
import { Button } from './Button';

const args: ComponentProps<typeof Button> = {
  type: 'button',
  children: 'Button',
  icon: <FiArrowRight strokeWidth={3} />,
  variant: 'secondary',
  size: 'sm',
  shape: 'rectangle',
};

const arrows = {
  FiArrowUp: <FiArrowUp strokeWidth={3} />,
  FiArrowDown: <FiArrowDown strokeWidth={3} />,
  FiArrowLeft: <FiArrowLeft strokeWidth={3} />,
  FiArrowRight: <FiArrowRight strokeWidth={3} />,
};

const config: Meta<typeof args> = {
  title: 'Atoms / Button',
  component: Button,
  args,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(arrows),
        labels: {
          FiArrowUp: 'Up',
          FiArrowDown: 'Down',
          FiArrowLeft: 'Left',
          FiArrowRight: 'Right',
        },
      },
      mapping: arrows,
    },
  },
};

export default config;

const Template: Story<typeof args> = (props) => <Button {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Button';
