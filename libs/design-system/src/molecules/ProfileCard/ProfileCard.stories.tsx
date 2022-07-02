import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { ProfileCard } from './ProfileCard';

const args: ComponentProps<typeof ProfileCard> = {
  src: 'https://randomuser.me/api/portraits/men/52.jpg',
  name: 'John Doe',
  course: 'BSc Computer Science Year 2',
};

const config: Meta<typeof args> = {
  title: 'Design System / Molecules / Profile Card',
  component: ProfileCard,
  args,
};

export default config;

export const Normal: Story<typeof args> = (props) => <ProfileCard {...props} />;
Normal.storyName = 'Profile Card';
