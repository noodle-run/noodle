import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { UnorderedList } from './UnorderedList';

const args: ComponentProps<typeof UnorderedList> = {
  children: <li>Item one</li>,
};

const config: Meta<typeof args> = {
  title: 'Editor / Unordered List',
  component: UnorderedList,
  args,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    element: {
      table: {
        disable: true,
      },
    },
  },
};

export default config;

const Template: Story<typeof args> = (props) => <UnorderedList {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Unordered List';
