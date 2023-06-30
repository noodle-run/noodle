import '@storybook/react';

import type { Meta, StoryObj } from '@storybook/react';
import { Terminal } from 'lucide-react';

import 'react';

import type { ComponentProps, FC, PropsWithChildren } from 'react';

import { Alert, AlertDescription, AlertTitle } from '.';

type AlertDemoProps = Pick<ComponentProps<typeof Alert>, 'variant'>;

const AlertDemo: FC<PropsWithChildren<AlertDemoProps>> = ({
  children,
  variant,
}) => {
  return (
    <Alert variant={variant}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default {
  title: 'Design System / Alert',
  component: AlertDemo,
  args: {
    children: 'Noodle will be great, Noodle is love, Noodle is life.',
  },
} satisfies Meta<typeof Alert>;

type Story = StoryObj<typeof AlertDemo>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};
