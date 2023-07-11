import type { Meta, StoryObj } from '@storybook/react';
import type { FC, PropsWithChildren } from 'react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '.';

const component: FC<PropsWithChildren> = ({ children }) => (
  <main className="flex min-h-screen items-center justify-center">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Trigger Tooltip</TooltipTrigger>
        <TooltipContent>
          <p>{children}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </main>
);

export default {
  title: 'Design System / Tooltip',
  component,
  args: {
    children:
      'You can invoke the bold styling by clicking on this button or using the CMD + B keyboard shortcut.',
  },
} as Meta<typeof component>;

type Story = StoryObj<typeof component>;

export const Default: Story = {
  name: 'Tooltip',
};
