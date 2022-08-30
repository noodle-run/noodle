import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Superscript } from './Superscript';

const args: ComponentProps<typeof Superscript> = {
  children: 'Superscript text',
};

const config: Meta<typeof args> = {
  title: 'Editor / Superscript',
  component: Superscript,
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

const Template: Story<typeof args> = (props) => <Superscript {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Superscript';
