import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Greeting } from './Greeting';

const args: ComponentProps<typeof Greeting> = {
  greeting: 'Good morning',
  quote:
    '"Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings." - Arthur Rubinstein',
};

const config: Meta<typeof args> = {
  title: 'Molecules / Greeting',
  component: Greeting,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <Greeting {...props} />;

export const Default = Template.bind({});
Default.storyName = 'Greeting';
