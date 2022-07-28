import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Center } from './Center';

const args: ComponentProps<typeof Center> = {
  children: "I'm centered!",
  css: {
    height: '100vh',
    width: '100%',
  },
};

const config: Meta<typeof args> = {
  title: 'Design System / Quarks / Center',
  component: Center,
  args,
};

export default config;

export const Normal: Story<typeof args> = (props) => <Center {...props} />;
Normal.storyName = 'Center';
