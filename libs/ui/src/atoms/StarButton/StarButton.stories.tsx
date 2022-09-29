import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { StarButton } from './StarButton';

const args: ComponentProps<typeof StarButton> = {
  isStarred: false,
};

const config: Meta<typeof args> = {
  title: 'Atoms / Star Button',
  component: StarButton,
  args,
  argTypes: {
    onChange: {
      action: 'toggled button',
      table: {
        disable: true,
      },
    },
  },
};

export default config;

const Template: Story<typeof args> = (props) => <StarButton {...props} />;

export const Normal = Template.bind({});
Normal.storyName = 'Star Button';
