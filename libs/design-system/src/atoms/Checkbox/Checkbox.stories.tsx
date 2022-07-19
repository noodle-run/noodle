import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Checkbox } from './Checkbox';

const args: ComponentProps<typeof Checkbox> = {
  checked: false,
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Checkbox',
  component: Checkbox,
  args,
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default config;

export const Normal: Story<typeof args> = (props) => <Checkbox {...props} />;
Normal.storyName = 'Checkbox';
