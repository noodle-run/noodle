import { Balancer } from 'react-wrap-balancer';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="container mx-auto flex h-screen flex-col items-center justify-center">
      <h1 className="scroll-m-20 pb-2 text-center text-5xl font-extrabold tracking-tight lg:pb-4 lg:text-7xl text-primary-500">
        Noodle
      </h1>
      <h1 className="scroll-m-20 text-center text-5xl font-extrabold tracking-tight lg:text-6xl">
        <Balancer>Rethinking Student Productivity</Balancer>
      </h1>
      <p className="text-gray-11 dark:text-graydark-11 text-center text-base leading-7 lg:text-lg [&:not(:first-child)]:mt-6">
        <Balancer>
          The Noodle Team is currently cooking up something awesome. Stay tuned!
        </Balancer>
      </p>
      <p className="text-gray-11 dark:text-graydark-11 text-center text-base leading-7 lg:text-lg [&:not(:first-child)]:mt-6">
        <Balancer>
          Follow{' '}
          <a
            href="https://twitter.com/ixahmedxii"
            className="text-primary-500 underline"
          >
            Ahmed
          </a>{' '}
          and{' '}
          <a
            href="https://twitter.com/F1VEBORDIER"
            className="text-primary-500 underline"
          >
            Sinclair
          </a>{' '}
          on Twitter for updates.
        </Balancer>
      </p>
    </main>
  );
};

export default Home;
