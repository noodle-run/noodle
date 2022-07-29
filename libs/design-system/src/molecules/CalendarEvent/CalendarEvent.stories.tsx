import { colorGroups } from '@noodle/stitches';
import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { CalendarEvent } from './CalendarEvent';

const args: ComponentProps<typeof CalendarEvent> = {
  label: 'Algorithms and Complexity',
  startTime: '8AM',
  endTime: '9AM',
  children: 'Join',
  color: 'indigo',
  barColor: 'red',
};

const config: Meta<typeof args> = {
  title: 'Design System / Molecules / Calendar Event',
  component: CalendarEvent,
  args,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colorGroups,
      },
    },
    barColor: {
      control: {
        type: 'select',
        options: colorGroups,
      },
    },
  },
};

export default config;

export const Normal: Story<typeof args> = (props) => (
  <CalendarEvent {...props} />
);
Normal.storyName = 'Calendar Event';
