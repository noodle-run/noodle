import { Landing } from '@noodle/ui';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { Greeting } from '../components/Greeting';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen w-scree">
        <ClimbingBoxLoader color="#fa617b" />
      </div>
    );
  }

  if (session && session.user) {
    return <Greeting />;
  }

  return <Landing />;
};

export default Home;
