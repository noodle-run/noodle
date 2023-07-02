import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="container mx-auto flex h-screen flex-col items-center justify-center">
      <h1 className="scroll-m-20 pb-2 text-center text-5xl font-extrabold tracking-tight lg:pb-4 lg:text-6xl">
        Noodle
      </h1>
      <h1 className="scroll-m-20 text-center text-5xl font-extrabold tracking-tight lg:text-6xl">
        Rethinking Student Productivity
      </h1>
      <p className="text-gray-11 dark:text-graydark-11 max-w-[36ch] text-center text-base leading-7 lg:text-lg [&:not(:first-child)]:mt-6">
        Cooking is being undertaken by the Noodle team. Please wait warmly until
        it is ready.
      </p>
      <p className="text-gray-11 dark:text-graydark-11 max-w-[36ch] text-center text-base leading-7 lg:text-lg [&:not(:first-child)]:mt-6">
        Follow{' '}
        <a
          href="https://twitter.com/ixahmedxii"
          className="text-blue-10 underline"
        >
          Ahmed
        </a>{' '}
        and{' '}
        <a
          href="https://twitter.com/F1VEBORDIER"
          className="text-blue-10 underline"
        >
          Sinclair
        </a>{' '}
        on Twitter for updates.
      </p>
    </main>
  );
};

export default Home;
