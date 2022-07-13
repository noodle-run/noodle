import { colorGroups } from '@noodle/stitches';
import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { ModuleCard } from './ModuleCard';

const args: ComponentProps<typeof ModuleCard> = {
  icon: '🖥',
  moduleName: 'Algorithms and Complexity',
  moduleCode: 'CS2850',
  credits: 15,
  tasksRemaining: 5,
  progress: 50,
  progressBarColor: 'red',
};

const config: Meta<typeof args> = {
  title: 'Design System / Molecules / ModuleCard',
  component: ModuleCard,
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
    progressBarColor: {
      control: {
        options: colorGroups,
        type: 'select',
      },
    },
  },
};

export default config;

export const Normal: Story<typeof args> = (props) => <ModuleCard {...props} />;
Normal.storyName = 'Module Card';
