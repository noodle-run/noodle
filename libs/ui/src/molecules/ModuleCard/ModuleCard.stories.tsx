import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { ModuleCard } from './ModuleCard';

const args: ComponentProps<typeof ModuleCard> = {
  href: '/modules/1',
  name: 'Algorithms and Complexity',
  code: 'CS2860',
  tasks: 3,
  color: 'red',
  progress: 45,
  icon: '🧠',
};

const config: Meta<typeof args> = {
  title: 'Molecules / Module Card',
  component: ModuleCard,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <ModuleCard {...props} />;

export const Default = Template.bind({});
Default.storyName = 'Module Card';
