import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { InternalError } from './InternalError';

const args: ComponentProps<typeof InternalError> = {
  message: 'Could not fetch data needed to display recent modules',
};

const config: Meta = {
  title: 'Pages / Internal Error',
  component: InternalError,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <InternalError {...props} />;

export const Default = Template.bind({});
Default.storyName = 'Internal Error';
