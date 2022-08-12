import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { NavLink } from './NavLink';

const args: ComponentProps<typeof NavLink> = {
  href: '/about',
  children: 'Home',
};

const config: Meta<typeof args> = {
  title: 'Atoms / NavLink',
  component: NavLink,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <NavLink {...props} />;

export const Normal = Template.bind({});

export const Active = Template.bind({});
Active.args = {
  href: '/',
};
