import { type NextPage } from 'next';

import { Typography } from '@noodle/ui';

import { Greeting } from '@/components/Greeting';

const Home: NextPage = () => {
  return (
    <main>
      <h1>Home page</h1>
      <Greeting />
      <Typography />
    </main>
  );
};

export default Home;
