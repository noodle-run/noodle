import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Italic } from './Italic';

const args: ComponentProps<typeof Italic> = {
  children: 'Italic text',
};

const config: Meta<typeof args> = {
  title: 'Editor / Italic',
  component: Italic,
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

const Template: Story<typeof args> = (props) => <Italic {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Italic';
