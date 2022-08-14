import { Landing } from '@noodle/ui';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
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

  return <Landing />;
};

export default Home;
