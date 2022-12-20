import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { NotebookItem } from './NotebookItem';

const args: ComponentProps<typeof NotebookItem> = {
  icon: '📚',
  title: 'Introduction to Computer Algorithms',
  lastEdited: '19 hours ago',
  href: '/notebooks/1',
  label: {
    name: 'Algorithms and Complexity',
    color: 'red',
  },
};

const config: Meta<typeof args> = {
  title: 'Molecules / Notebook Item',
  component: NotebookItem,
  args,
};

export default config;

const Template: Story<ComponentProps<typeof NotebookItem>> = (props) => (
  <NotebookItem {...props} />
);

export const Normal = Template.bind({});
Normal.storyName = 'Notebook Item';

export const Loading = Template.bind({});
Loading.args = {
  variant: 'loading',
};
