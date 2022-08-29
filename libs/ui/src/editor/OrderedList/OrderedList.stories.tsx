import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { OrderedList } from './OrderedList';

const args: ComponentProps<typeof OrderedList> = {
  children: <li>Item one</li>,
};

const config: Meta<typeof args> = {
  title: 'Editor / Ordered List',
  component: OrderedList,
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

const Template: Story<typeof args> = (props) => <OrderedList {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Ordered List';
