import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { ProgressBar } from './ProgressBar';

const args: ComponentProps<typeof ProgressBar> = {
  value: 50,
  color: 'red',
};

const config: Meta<typeof args> = {
  title: 'Atoms / Progress Bar',
  component: ProgressBar,
  args,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};

export default config;

const Template: Story<typeof args> = (props) => <ProgressBar {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Progress Bar';
