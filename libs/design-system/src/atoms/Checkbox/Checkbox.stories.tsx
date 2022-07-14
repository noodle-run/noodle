import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Checkbox } from './Checkbox';

const args: ComponentProps<typeof Checkbox> = {
  isChecked: false,
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Checkbox',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: Checkbox,
  args,
  argTypes: {
    isChecked: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default config;

export const Normal: Story<typeof args> = (props) => <Checkbox {...props} />;
Normal.storyName = 'Checkbox';
