import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { LogoText } from './LogoText';

const args: ComponentProps<typeof LogoText> = {
  text: 'Noodle',
  size: 50,
};

const config: Meta = {
  title: 'Design System / Molecules / LogoText',
  component: LogoText,
  args,
};

export default config;

export const Normal: Story<typeof args> = (props) => <LogoText {...props} />;
Normal.storyName = 'LogoText';
