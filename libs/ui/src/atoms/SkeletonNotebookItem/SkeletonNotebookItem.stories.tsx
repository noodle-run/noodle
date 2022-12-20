import { Meta, Story } from '@storybook/react';
import { SkeletonNotebookItem } from './SkeletonNotebookItem';

const config: Meta = {
  title: 'Atoms / Skeleton Notebook Item',
  component: SkeletonNotebookItem,
};

export default config;

const Template: Story = () => <SkeletonNotebookItem />;

export const Default = Template.bind({});
Default.storyName = 'Skeleton Notebook Item';
