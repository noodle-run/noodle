import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Text } from './Text';

const args: ComponentProps<typeof Text> = {
  children: 'Hello World',
};

const config: Meta<typeof args> = {
  title: 'Design System / Quarks / Text',
  component: Text,
  args,
};

export default config;

export const Small: Story<typeof args> = (props) => (
  <Text size="small" {...props} />
);

export const Normal: Story<typeof args> = (props) => <Text {...props} />;

export const Large: Story<typeof args> = (props) => (
  <Text size="large" {...props} />
);

export const Title: Story<typeof args> = (props) => (
  <Text size="title" {...props} />
);
