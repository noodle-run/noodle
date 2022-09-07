import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Input } from './Input';

const args: ComponentProps<typeof Input> = {
  type: 'email',
  placeholder: 'Enter your email',
};

const config: Meta<typeof args> = {
  title: 'Atoms / Input',
  component: Input,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <Input {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Input';
