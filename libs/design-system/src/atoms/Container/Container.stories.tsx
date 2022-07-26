import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Container } from './Container';

const args: ComponentProps<typeof Container> = {
  children: 'Container',
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Container',
  component: Container,
  args,
};

export default config;

export const Normal: Story<typeof args> = (props) => <Container {...props} />;
Normal.storyName = 'Container';
