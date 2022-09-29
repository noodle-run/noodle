import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { TodaysActivity } from './TodaysActivity';

const args: ComponentProps<typeof TodaysActivity> = {
  userName: 'Ahmed Elsakaan',
  userCourse: 'Computer Science',
  userAvatar: 'https://avatars.githubusercontent.com/u/20271968?v=4',
  quote:
    '"Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings." - Arthur Rubinstein',
  recentModules: [
    {
      href: '/modules/1',
      name: 'Algorithms and Complexity',
      code: 'CS2860',
      tasks: 3,
      color: 'red',
      progress: 45,
      icon: <>🧠</>,
    },
    {
      href: '/modules/2',
      name: 'IT Project Management',
      code: 'CS3003',
      tasks: 10,
      color: 'green',
      progress: 20,
      icon: <>📽</>,
    },
    {
      href: '/modules/3',
      name: 'User centered design',
      code: 'PC3001',
      tasks: 6,
      color: 'indigo',
      progress: 55,
      icon: <>💅</>,
    },
    {
      href: '/modules/4',
      name: 'Final Year Project',
      code: 'CS3810',
      tasks: 5,
      color: 'amber',
      progress: 75,
      icon: <>📌</>,
    },
    {
      href: '/modules/5',
      name: 'Malicious Software',
      code: 'IY3840',
      tasks: 2,
      color: 'blue',
      progress: 80,
      icon: <>🔐</>,
    },
  ],
  recentNotebooks: [
    {
      emoji: '📚',
      title: 'Introduction to Computer Algorithms',
      lastEdited: '2 hours ago',
      href: '/notebooks/1',
      label: {
        name: 'Algorithms and Complexity',
        color: 'red',
      },
      defaultStarred: false,
    },
    {
      emoji: '✨',
      title: 'Week 1 - Introduction to IT Project Management',
      lastEdited: '6 hours ago',
      href: '/notebooks/2',
      label: {
        name: 'IT Project Management',
        color: 'green',
      },
      defaultStarred: false,
    },
    {
      emoji: '👩‍🎨',
      title: 'Introduction to User centered design',
      lastEdited: '8 hours ago',
      href: '/notebooks/3',
      label: {
        name: 'User centered design',
        color: 'indigo',
      },
      defaultStarred: false,
    },
    {
      emoji: '📌',
      title: 'Final Project Plan',
      lastEdited: '14 hours ago',
      href: '/notebooks/4',
      label: {
        name: 'Final Year Project',
        color: 'amber',
      },
      defaultStarred: false,
    },
    {
      emoji: '🔐',
      title: 'Encryption and Decryption',
      lastEdited: '23 hours ago',
      href: '/notebooks/5',
      label: {
        name: 'Malicious Software',
        color: 'blue',
      },
      defaultStarred: false,
    },
  ],
};

const config: Meta<typeof args> = {
  title: "Pages / Today's Activity",
  component: TodaysActivity,
  args,
};

export default config;

const Template: Story<typeof args> = (props) => <TodaysActivity {...props} />;

export const Normal = Template.bind({});
Normal.storyName = "Today's Activity";
