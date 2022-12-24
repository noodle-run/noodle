import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { FiActivity } from 'react-icons/fi';
import { Sidebar } from './Sidebar';

const args: ComponentProps<typeof Sidebar> = {
  user: {
    name: 'Ahmed Elsakaan',
    avatar: 'https://avatars.githubusercontent.com/u/20271968?v=4',
  },
  links: [
    {
      label: "Today's Activity",
      href: '/dashboard',
      icon: <FiActivity />,
    },
  ],
};

const config: Meta<typeof args> = {
  title: 'Organisms / Sidebar',
  component: Sidebar,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <Sidebar {...props} />;

export const Default = Template.bind({});
Default.storyName = 'Sidebar';
