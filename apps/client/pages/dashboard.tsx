import { requireAuth } from '@noodle/server';
import { GetServerSideProps, NextPage } from 'next';
import { Greeting } from '../components/Greeting';

const Dashboard: NextPage = () => <Greeting />;

export const getServerSideProps: GetServerSideProps = async (context) =>
  requireAuth(context, (session) => ({
    props: { session },
  }));

export default Dashboard;
