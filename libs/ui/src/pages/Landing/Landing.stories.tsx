import { Meta, Story } from '@storybook/react';
import { Landing } from './Landing';

const config: Meta = {
  title: 'Pages / Landing',
  component: Landing,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default config;

export const Normal: Story = () => <Landing />;
Normal.storyName = 'Landing';
