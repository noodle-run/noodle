import { expect } from '@storybook/jest';
import { Meta, Story } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { ComponentProps } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { Button } from './Button';

const args: ComponentProps<typeof Button> = {
  children: 'Add new',
  icon: <FiPlusCircle />,
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Button',
  component: Button,
  args,
  argTypes: {
    onClick: {
      action: true,
    },
    icon: {
      control: false,
    },
    type: {
      control: false,
    },
  },
};

export default config;

export const Normal: Story<typeof args> = (props) => <Button {...props} />;
Normal.storyName = 'Button';
Normal.play = async ({ canvasElement, args: props }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole('button'));
  expect(props.onClick).toHaveBeenCalled();
};
