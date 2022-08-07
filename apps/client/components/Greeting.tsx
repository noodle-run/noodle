import { Button } from '@noodle/design-system';
import { styled } from '@noodle/stitches';
import { signOut, useSession } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';
import { trpc } from '../utils/trpc';

const Center = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'hidden',
});

const Title = styled('h1', {
  fontSize: '$2xl',
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

export const Greeting = () => {
  const { data: session } = useSession();
  const { data: greetingData } = trpc.proxy.greeting.useQuery({
    name: 'from tRPC',
  });

  return (
    <Center>
      <Title>{greetingData && greetingData.msg}</Title>
      <Description>Signed in as {session?.user?.email}</Description>
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
};
