import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Brand } from './Brand';

const args: ComponentProps<typeof Brand> = {
  size: '50',
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Brand',
  component: Brand,
  args,
};

export default config;

export const Normal: Story<typeof args> = (props) => <Brand {...props} />;
Normal.storyName = 'Brand';
