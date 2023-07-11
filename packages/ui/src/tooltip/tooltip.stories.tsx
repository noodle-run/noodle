import type { Meta, StoryObj } from '@storybook/react';

import '@storybook/react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '.';

const component = () => (
  <main className="flex min-h-screen items-center justify-center">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Trigger Tooltip</TooltipTrigger>
        <TooltipContent>
          <p>
            You can invoke the bold styling by clicking on this button or using
            the CMD + B keyboard shortcut.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </main>
);

export default {
  title: 'Design System / Tooltip',
  component,
} as Meta;

type Story = StoryObj<typeof component>;

export const Default: Story = {
  name: 'Tooltip',
};
