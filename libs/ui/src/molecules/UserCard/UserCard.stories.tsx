import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { UserCard } from './UserCard';

const args: ComponentProps<typeof UserCard> = {
  name: 'Ahmed Elsakaan',
  course: 'Computer Science',
  avatar: 'https://avatars.githubusercontent.com/u/20271968?v=4',
};

const config: Meta<typeof args> = {
  title: 'Molecules / User Card',
  component: UserCard,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <UserCard {...props} />;

export const Default = Template.bind({});
Default.storyName = 'User Card';
