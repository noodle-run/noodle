import { Brand, Button } from '@noodle/design-system';
import { styled } from '@noodle/stitches';
import { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { FiGithub } from 'react-icons/fi';
import { Greeting } from '../components/Greeting';

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

  if (status === 'loading') {
    return (
      <Center>
        <Description>Loading...</Description>
      </Center>
    );
  }

  if (session && session.user) {
    return <Greeting />;
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
