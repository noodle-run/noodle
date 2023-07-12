import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '.';

const component = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default {
  title: 'UI / Skeleton',
  component,
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  name: 'Skeleton',
};
