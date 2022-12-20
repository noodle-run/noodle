import { Meta, Story } from '@storybook/react';
import { SkeletonCard } from './SkeletonCard';

const config: Meta = {
  title: 'Atoms / Skeleton Card',
  component: SkeletonCard,
};

export default config;

const Template: Story = () => <SkeletonCard />;

export const Default = Template.bind({});
Default.storyName = 'Skeleton Card';
