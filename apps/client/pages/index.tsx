import { Landing, LoadingScreen, TodaysActivity } from '@noodle/ui';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { ComponentProps } from 'react';
import { trpc } from '../utils/trpc';

const todaysProps: Pick<
  ComponentProps<typeof TodaysActivity>,
  'recentNotebooks' | 'recentModules'
> = {
  recentModules: [
    {
      href: '/modules/1',
      icon: '🧠',
      name: 'Algorithms and Complexity',
      code: 'CS2860',
      color: 'red',
    },
    {
      href: '/modules/2',
      icon: '📽',
      name: 'IT Project Management',
      code: 'CS3003',
      color: 'green',
    },
    {
      href: '/modules/3',
      icon: '💅',
      name: 'User centered design',
      code: 'PC3001',
      color: 'indigo',
    },
    {
      href: '/modules/4',
      icon: '📌',
      name: 'Final Year Project',
      code: 'CS3810',
      color: 'amber',
    },
    {
      href: '/modules/5',
      icon: '🔐',
      name: 'Malicious Software',
      code: 'IY3840',
      color: 'blue',
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
    },
  ],
};

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const { data: quote, isLoading } = trpc.getGreeting.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const { mutateAsync } = trpc.addEmailToWaitList.useMutation();

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  if (status === 'unauthenticated') {
    return (
      <Landing onWaitListFormSubmit={async (email) => mutateAsync({ email })} />
    );
  }

  return (
    <TodaysActivity
      userAvatar={session?.user?.image || undefined}
      userName={session?.user?.name || undefined}
      greetingProps={
        { ...quote, isLoading } || { greeting: '', quote: '', isLoading: true }
      }
      recentModules={todaysProps.recentModules}
      recentNotebooks={todaysProps.recentNotebooks}
    />
  );
};

export default Home;
