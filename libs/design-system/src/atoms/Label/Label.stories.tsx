import { colorGroups } from '@noodle/stitches';
import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Label } from './Label';

const args: ComponentProps<typeof Label> = {
  children: 'Label',
  color: 'gray',
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Label',
  component: Label,
  args,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colorGroups,
      },
    },
  },
};

export default config;

export const Normal: Story<typeof args> = (props) => <Label {...props} />;
Normal.storyName = 'Label';
