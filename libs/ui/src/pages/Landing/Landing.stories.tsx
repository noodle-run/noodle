import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Landing } from './Landing';

const args: ComponentProps<typeof Landing> = {
  onWaitListFormSubmit: () => Promise.resolve(),
};

const config: Meta = {
  title: 'Pages / Landing',
  component: Landing,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args,
};

export default config;

export const Normal: Story<typeof args> = (props) => <Landing {...props} />;
Normal.storyName = 'Landing';
