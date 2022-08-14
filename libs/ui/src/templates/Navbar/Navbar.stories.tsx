import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar';

const config: ComponentMeta<typeof Navbar> = {
  title: 'Templates / Navbar',
  component: Navbar,
};

export default config;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Normal = Template.bind({});
Normal.storyName = 'Navbar';
