import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { FiZap } from 'react-icons/fi';
import { Link } from './Link';

const args: ComponentProps<typeof Link> = {
  href: '/',
  text: 'Link To Page',
  variant: 'default',
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Link',
  component: Link,
  args,
  argTypes: {
    href: {
      control: false,
    },
    icon: {
      control: false,
    },
  },
};

export default config;

export const NoIcon: Story<typeof args> = (props) => <Link {...props} />;

export const WithIcon: Story<typeof args> = (props) => (
  <Link {...props} icon={<FiZap />} />
);
