import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { ModuleCard } from './ModuleCard';

const args: ComponentProps<typeof ModuleCard> = {
  variant: 'default',
  href: '/modules/1',
  name: 'Algorithms and Complexity',
  code: 'CS2860',
  tasks: 3,
  color: 'red',
  progress: 45,
  icon: '🧠',
  credits: 15,
};

const config: Meta<typeof args> = {
  title: 'Molecules / Module Card',
  component: ModuleCard,
  args,
};

export default config;

const Template: Story<ComponentProps<typeof ModuleCard>> = (props) => (
  <ModuleCard {...props} />
);

export const Normal = Template.bind({});

export const NoTasks = Template.bind({});
NoTasks.args = {
  progress: undefined,
  tasks: undefined,
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'loading',
};
