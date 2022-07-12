import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { TimeSince } from './TimeSince';

const args: ComponentProps<typeof TimeSince> = {
  date: new Date(),
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / TimeSince',
  component: TimeSince,
  args,
  argTypes: {
    date: { control: 'date' },
  },
};

export default config;

export const Normal: Story<typeof args> = (props) => <TimeSince {...props} />;
Normal.storyName = 'TimeSince';
