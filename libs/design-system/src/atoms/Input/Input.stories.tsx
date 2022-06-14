import { expect } from '@storybook/jest';
import { Meta, Story } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { ComponentProps } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Input } from './Input';

const args: ComponentProps<typeof Input> = {
  icon: <FiSearch />,
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Input',
  component: Input,
  argTypes: {
    icon: {
      control: false,
    },
    onChange: {
      action: true,
    },
  },
};

export default config;

const play: typeof WithIcon.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.type(canvas.getByRole('textbox'), 'This is an input field');

  expect(canvas.getByRole('textbox')).toHaveValue('This is an input field');
};

export const WithIcon: Story<typeof args> = (props) => <Input {...props} />;
WithIcon.args = args;
WithIcon.play = play;

export const NoIcon: Story<typeof args> = (props) => <Input {...props} />;
NoIcon.play = play;
