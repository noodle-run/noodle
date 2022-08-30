import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { UnorderedList } from '../UnorderedList';
import { ListItem } from './ListItem';

const args: ComponentProps<typeof ListItem> = {
  children: 'Item one',
};

const config: Meta<typeof args> = {
  title: 'Editor / List Item',
  component: ListItem,
  args,
  argTypes: {
    element: {
      table: {
        disable: true,
      },
    },
  },
};

export default config;

const Template: Story<typeof args> = (props) => (
  <UnorderedList>
    <ListItem {...props} />
  </UnorderedList>
);

export const Normal = Template.bind({});
Normal.storyName = 'List Item';
