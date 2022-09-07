import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Auth } from './Auth';

const config: ComponentMeta<typeof Auth> = {
  title: 'Pages / Auth',
  component: Auth,
};

export default config;

const Template: ComponentStory<typeof Auth> = (props) => <Auth {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Auth';
