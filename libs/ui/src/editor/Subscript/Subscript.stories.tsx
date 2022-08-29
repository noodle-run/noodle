import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Subscript } from './Subscript';

const args: ComponentProps<typeof Subscript> = {
  children: 'Subscript text',
};

const config: Meta<typeof args> = {
  title: 'Editor / Subscript',
  component: Subscript,
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

const Template: Story<typeof args> = (props) => <Subscript {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Subscript';
