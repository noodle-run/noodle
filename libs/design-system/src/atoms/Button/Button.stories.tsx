import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Button } from './Button';

const args: ComponentProps<typeof Button> = {
  children: 'Add new',
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Button',
  component: Button,
  args,
};

export default config;

export const Normal: Story<typeof args> = (props) => <Button {...props} />;
Normal.storyName = 'Button';
