import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Layout } from './Layout';

const args: ComponentProps<typeof Layout> = {
  sidemenu: <p>SideMenu</p>,
  children: <p>Content</p>,
};

const config: Meta = {
  title: 'Design System / Templates / Layout',
  component: Layout,
  args,
  argTypes: {
    sidemenu: {
      control: false,
    },
    children: {
      control: false,
    },
  },
};

export default config;

export const Normal: Story<typeof args> = (props) => <Layout {...props} />;
Normal.storyName = 'Layout';
