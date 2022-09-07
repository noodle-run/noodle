import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Button } from './Button';

const args: ComponentProps<typeof Button> = {
  type: 'button',
  children: 'Button',
  icon: <FiArrowRight strokeWidth={3} />,
};

const config: Meta<typeof args> = {
  title: 'Atoms / Button',
  component: Button,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <Button {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Button';
