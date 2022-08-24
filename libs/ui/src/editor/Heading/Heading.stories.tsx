import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Heading } from './Heading';

const args: ComponentProps<typeof Heading> = {
  children: 'Heading',
  variant: 'h1',
};

const config: Meta<typeof args> = {
  title: 'Editor / Heading',
  component: Heading,
  args,
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
    element: {
      table: {
        disable: true,
      },
    },
    attributes: {
      table: {
        disable: true,
      },
    },
  },
};

export default config;

const Template: Story<typeof args> = (props) => <Heading {...props} />;

export const H1 = Template.bind({});
H1.storyName = 'h1';

export const H2 = Template.bind({});
H2.storyName = 'h2';
H2.args = {
  variant: 'h2',
};

export const H3 = Template.bind({});
H3.storyName = 'h3';
H3.args = {
  variant: 'h3',
};

export const H4 = Template.bind({});
H4.storyName = 'h4';
H4.args = {
  variant: 'h4',
};

export const H5 = Template.bind({});
H5.storyName = 'h5';
H5.args = {
  variant: 'h5',
};

export const H6 = Template.bind({});
H6.storyName = 'h6';
H6.args = {
  variant: 'h6',
};
