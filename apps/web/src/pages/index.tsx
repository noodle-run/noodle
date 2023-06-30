import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

import { TypographyP } from '@noodle/ui';

import { Greeting } from '@/components/Greeting';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session?.user) {
    return (
      <main>
        <h1>Not Authenticated</h1>
        <button type="button" onClick={() => void signIn('github', {})}>
          Sign in with Github
        </button>
      </main>
    );
  }

  return (
    <main>
      <Greeting name={session.user.name} />
      <button type="button" onClick={() => void signOut()}>
        Sign out
      </button>
      <TypographyP>Hello from the UI package</TypographyP>
    </main>
  );
};

export default Home;
