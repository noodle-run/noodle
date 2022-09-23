import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { FiSettings } from 'react-icons/fi';
import { DropdownMenu } from './DropdownMenu';

const args: ComponentProps<typeof DropdownMenu> = {
  trigger: <button>click me</button>,
  list: [
    {
      label: 'Settings',
      href: '/settings',
      icon: <FiSettings />,
    },
  ],
};

const config: Meta<typeof args> = {
  title: 'Atoms / Dropdown Menu',
  component: DropdownMenu,
  args,
  argTypes: {
    trigger: {
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
