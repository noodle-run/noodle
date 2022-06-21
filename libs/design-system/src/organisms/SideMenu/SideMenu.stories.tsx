import { Meta, Story } from '@storybook/react';
import { SideMenu } from './SideMenu';

const config: Meta = {
  title: 'Design System / Organisms / SideMenu',
  component: SideMenu,
};

export default config;

export const Normal: Story = () => <SideMenu />;
Normal.storyName = 'SideMenu';
