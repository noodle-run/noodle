import { Meta, Story } from '@storybook/react';
import { NotFound } from './NotFound';

const config: Meta = {
  title: 'Pages/Not Found',
  component: NotFound,
};

export default config;

const Template: Story = () => <NotFound />;

export const Default = Template.bind({});
Default.storyName = 'Not Found';
