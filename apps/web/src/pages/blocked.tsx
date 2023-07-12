import { type NextPage } from 'next';

const Blocked: NextPage = () => {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-6xl font-extrabold tracking-tighter md:text-7xl">
        Access Denied
      </h1>
      <p className="text-gray-11 dark:text-graydark-11">
        Our servers have put you on the naughty list.
      </p>
    </main>
  );
};

export default Blocked;
