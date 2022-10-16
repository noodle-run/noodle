import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Dashboard } from './Dashboard';

const args: ComponentProps<typeof Dashboard> = {
  children: 'Dashboard content',
  userName: 'Ahmed Elsakaan',
  userAvatar: 'https://avatars.githubusercontent.com/u/20271968?v=4',
};

const config: Meta<typeof args> = {
  title: 'Templates / Dashboard',
  component: Dashboard,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <Dashboard {...props} />;

export const Default = Template.bind({});
Default.storyName = 'Dashboard';
