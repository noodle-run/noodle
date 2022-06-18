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

export const WithIcon: Story<typeof args> = (props) => <Button {...props} />;
WithIcon.args = args;
WithIcon.play = async ({ canvasElement, args: props }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole('button'));
  expect(props.onClick).toHaveBeenCalled();
};

export const NoIcon: Story<typeof args> = (props) => <Button {...props} />;
NoIcon.args = {
  children: 'Button',
};
NoIcon.play = async ({ canvasElement, args: props }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole('button'));
  expect(props.onClick).toHaveBeenCalled();
};
