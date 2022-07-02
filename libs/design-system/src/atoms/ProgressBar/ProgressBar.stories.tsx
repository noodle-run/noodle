import { colorGroups } from '@noodle/stitches';
import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { ProgressBar } from './ProgressBar';

const args: ComponentProps<typeof ProgressBar> = {
  progress: 50,
  color: 'red',
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Progress Bar',
  component: ProgressBar,
  args,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    color: {
      control: {
        options: colorGroups,
        type: 'select',
      },
    },
  },
};

export default config;

export const Normal: Story<typeof args> = (props) => <ProgressBar {...props} />;
Normal.storyName = 'Progress Bar';
