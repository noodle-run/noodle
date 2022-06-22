import { Brand, Button } from '@noodle/design-system';
import { styled } from '@noodle/stitches';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FiGithub, FiLogOut } from 'react-icons/fi';
import { useQuery } from '../utils/trpc';

const Center = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'hidden',
});

const Title = styled('h1', {
  fontSize: '$3xl',
  fontWeight: '$bold',
  paddingTop: '$3',
});

const Description = styled('p', {
  fontSize: '$sm',
  paddingTop: '$3',
  paddingBottom: '$6',
  maxWidth: '$third',
  textAlign: 'center',
  color: '$gray11',
  lineHeight: '$snug',
});

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const {
    data: greetingData,
    error,
    isLoading,
  } = useQuery([
    'hello.getGreeting',
    { greeting: session?.user?.name ?? 'world' },
  ]);

  if (status === 'loading' || isLoading) {
    return (
      <Center>
        <Description>Loading...</Description>
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        <Description>Error: {error.message}</Description>
      </Center>
    );
  }

  if (session && session.user) {
    return (
      <Center>
        <Title>{greetingData && greetingData.greeting}</Title>
        <Description>Signed in as {session.user.email}</Description>
        <Button
          onClick={() => {
            signOut().catch((err: string) => {
              throw new Error(err);
            });
          }}
          icon={<FiLogOut />}
        >
          Sign out
        </Button>
      </Center>
    );
  }

  return (
    <Center>
      <Brand />
      <Title>Noodle - Student productivity platform.</Title>
      <Description>
        A student productivity platform that aims at providing a way for
        students to manage their educational life with ease through providing
        note taking, calendar, tasks, assignments and much more!
      </Description>
      <Button
        onClick={() => {
          signIn('github').catch((err: string) => {
            throw new Error(err);
          });
        }}
        icon={<FiGithub />}
      >
        Github Login
      </Button>
    </Center>
  );
};

export default Home;
