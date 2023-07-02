import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session?.user) {
    return (
      <main>
        <h1>Noodle - Open Source Education Platform</h1>
        <button type="button" onClick={() => void signIn('github')}>
          Sign in with Github
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Hello there, {session.user.name}</h1>
      <button type="button" onClick={() => void signOut()}>
        Sign out
      </button>
    </main>
  );
};

export default Home;
