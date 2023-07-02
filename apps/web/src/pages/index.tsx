import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center">
      <h1 className="scroll-m-20 pb-4 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Noodle
      </h1>
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Rethinking Student Productivity
      </h1>
      <p className="text-gray-11 dark:text-graydark-11 text-center leading-7 [&:not(:first-child)]:mt-6">
        Cooking is being undertaken by the Noodle team. <br /> Please wait
        warmly until it is ready.
      </p>
    </main>
  );
};

export default Home;
