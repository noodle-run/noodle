import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { CodeBlock } from './CodeBlock';

const args: ComponentProps<typeof CodeBlock> = {
  children: 'const hello = () => {\n  console.log("Hello World!");\n}',
};

const config: Meta<typeof args> = {
  title: 'Editor / CodeBlock',
  component: CodeBlock,
  args,
  argTypes: {
    element: {
      table: {
        disable: true,
      },
    },
  },
};

export default config;

const Template: Story<typeof args> = (props) => <CodeBlock {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'CodeBlock';
