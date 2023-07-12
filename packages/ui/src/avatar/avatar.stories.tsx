import { type FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from '.';

const component: FC<{ fallback: boolean }> = ({ fallback }) => {
  return (
    <Avatar>
      {!fallback && (
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/20271968?v=4"
          alt="@ixahmedxi"
        />
      )}
      <AvatarFallback>AE</AvatarFallback>
    </Avatar>
  );
};

export default {
  title: 'Design System / Avatar',
  component,
  args: {
    fallback: false,
  },
} as Meta<typeof component>;

type Story = StoryObj<typeof component>;

export const Image: Story = {};

export const Fallback: Story = {
  args: {
    fallback: true,
  },
};
