import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { FiSettings, FiUser } from 'react-icons/fi';
import { DropdownMenu } from './DropdownMenu';

const args: ComponentProps<typeof DropdownMenu> = {
  children: 'click me',
  list: [
    {
      label: 'Profile',
      href: '/dashboard/profile',
      icon: <FiUser />,
    },
    {
      label: 'Settings',
      href: '/dashboard/settings',
      icon: <FiSettings />,
    },
  ],
  pos: 'bottom',
};

const config: Meta<typeof args> = {
  title: 'Atoms / Dropdown Menu',
  component: DropdownMenu,
  args,
  parameters: {
    controls: {
      exclude: [/^icon*/],
    },
  },
  argTypes: {
    pos: { control: 'select', options: ['bottom', 'top'] },
    list: {
      table: {
        disable: true,
      },
    },
    buttonAs: {
      table: {
        disable: true,
      },
    },
  },
};

export default config;

const Template: Story<typeof args> = (props) => <DropdownMenu {...props} />;

export const Default = Template.bind({});
Default.storyName = 'Dropdown Menu';
