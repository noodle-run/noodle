import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Strikethrough } from './Strikethrough';

const args: ComponentProps<typeof Strikethrough> = {
  children: 'Strikethrough text',
};

const config: Meta<typeof args> = {
  title: 'Editor / Strikethrough',
  component: Strikethrough,
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

const Template: Story<typeof args> = (props) => <Strikethrough {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Strikethrough';
