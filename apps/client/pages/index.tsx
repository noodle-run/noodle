import { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { Greeting } from '../components/Greeting';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (session && session.user) {
    return <Greeting />;
  }

  return (
    <div>
      <h1>Noodle - Student productivity platform.</h1>
      <h3>
        A student productivity platform that aims at providing a way for
        students to manage their educational life with ease through providing
        note taking, calendar, tasks, assignments and much more!
      </h3>
      <button
        onClick={() => {
          signIn('github').catch((err: string) => {
            throw new Error(err);
          });
        }}
      >
        Github Login
      </button>
    </div>
  );
};

export default Home;
