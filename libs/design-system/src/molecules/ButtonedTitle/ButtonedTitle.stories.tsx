import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { ButtonedTitle } from './ButtonedTitle';

const args: ComponentProps<typeof ButtonedTitle> = {
  title: 'Rethinking student productivity.',
  subtitle:
    'Noodle is an open source student productivity platform developed out of frustrations with current tools supplied by universities, free for all and can be self hosted!',
};

const config: Meta<typeof args> = {
  title: 'Design System / Molecules / ButtonedTitle',
  component: ButtonedTitle,
  args,
};

export default config;

export const Normal: Story<typeof args> = (props) => (
  <ButtonedTitle {...props} />
);
Normal.storyName = 'ButtonedTitle';
