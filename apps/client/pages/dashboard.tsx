import { authOptions } from '@noodle/server';
import { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { Greeting } from '../components/Greeting';

const Dashboard: NextPage = () => <Greeting />;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
      props: {
        session,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default Dashboard;
