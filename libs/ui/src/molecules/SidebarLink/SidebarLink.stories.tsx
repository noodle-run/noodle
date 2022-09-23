import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { FiBook } from 'react-icons/fi';
import { SidebarLink } from './SidebarLink';

const args: ComponentProps<typeof SidebarLink> = {
  icon: <FiBook />,
  href: '/notebooks',
  label: 'Notebooks',
};

const config: Meta<typeof args> = {
  title: 'Molecules / Sidebar Link',
  component: SidebarLink,
  args,
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
};

export default config;

const Template: Story<typeof args> = (props) => <SidebarLink {...props} />;

export const Default = Template.bind({});
Default.storyName = 'Sidebar Link';
