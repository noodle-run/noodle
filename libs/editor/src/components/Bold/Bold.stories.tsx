import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Bold } from './Bold';

const args: ComponentProps<typeof Bold> = {
  children: 'Strong text',
};

const config: Meta<typeof args> = {
  title: 'Editor / Bold',
  component: Bold,
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

const Template: Story<typeof args> = (props) => <Bold {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Bold';
