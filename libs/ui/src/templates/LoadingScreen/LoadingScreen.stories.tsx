import { Meta, Story } from '@storybook/react';
import { LoadingScreen } from './LoadingScreen';

const config: Meta = {
  title: 'Templates / Loading Screen',
  component: LoadingScreen,
};

export default config;

const Template: Story = () => <LoadingScreen />;

export const Normal = Template.bind({});
Normal.storyName = 'Loading Screen';
