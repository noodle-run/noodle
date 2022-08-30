import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { InlineCode } from './InlineCode';

const args: ComponentProps<typeof InlineCode> = {
  children: 'Inline Code text',
};

const config: Meta<typeof args> = {
  title: 'Editor / Inline Code',
  component: InlineCode,
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

const Template: Story<typeof args> = (props) => <InlineCode {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Inline Code';
