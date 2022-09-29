import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Auth } from './Auth';

const config: ComponentMeta<typeof Auth> = {
  title: 'Pages / Auth',
  component: Auth,
  argTypes: {
    onMagicLinkLogin: {
      action: 'clicked magic link login',
      table: {
        disable: true,
      },
    },
    onGithubLogin: {
      action: 'clicked github login',
      table: {
        disable: true,
      },
    },
    onGoogleLogin: {
      action: 'clicked google login',
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default config;

const Template: ComponentStory<typeof Auth> = (props) => <Auth {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Auth';
