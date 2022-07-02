import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Profile } from './Profile';

const args: ComponentProps<typeof Profile> = {
  src: 'https://randomuser.me/api/portraits/men/52.jpg',
};

const config: Meta<typeof args> = {
  title: 'Design System / Atoms / Profile',
  component: Profile,
  args,
};

export default config;

export const Normal: Story<typeof args> = (props) => <Profile {...props} />;
Normal.storyName = 'Profile';
