import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Underline } from './Underline';

const args: ComponentProps<typeof Underline> = {
  children: 'Underline text',
};

const config: Meta<typeof args> = {
  title: 'Editor / Underline',
  component: Underline,
  args,
  argTypes: {
    leaf: {
      table: {
        disable: true,
      },
    },
    text: {
      table: {
        disable: true,
      },
    },
  },
};

export default config;

const Template: Story<typeof args> = (props) => <Underline {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Underline';
