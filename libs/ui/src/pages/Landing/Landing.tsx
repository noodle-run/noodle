import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../templates/Navbar';

export const Landing = () => (
  <div className="h-screen overflow-hidden bg-[url('/bg.svg')] bg-bottom bg-no-repeat bg-cover">
    <main className="container px-6 py-8 mx-auto md:px-0">
      <Navbar />
      <header className="pt-24 text-center">
        <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-5xl">
          Rethinking student productivity.
        </h1>
        <p className="max-w-2xl pt-3 mx-auto text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          Noodle is an open source student productivity tool, providing students
          with all the tools they need to organise their life and study more
          efficiently.
        </p>
        <div className="flex items-center justify-center gap-4 pt-6 md:gap-6">
          <Link href="/about">
            <a className="px-4 py-2 text-sm font-semibold text-white transition-colors rounded-lg md:text-base hover:bg-primary-700 bg-primary-500">
              Learn more
            </a>
          </Link>
          <Link href="/contributing">
            <a className="px-4 py-2 text-sm font-semibold text-white transition-colors rounded-lg md:text-base bg-zinc-700 hover:bg-zinc-800">
              Contribute
            </a>
          </Link>
        </div>
        <div className="inline-block mt-24 overflow-hidden lg:mt-36 xl:mt-56 drop-shadow-xl rounded-3xl shadow-primary-500">
          <Image
            src="/preview.png"
            alt="Preview"
            placeholder="blur"
            width={1920 / 2}
            height={1080 / 2}
            className="rounded-3xl"
          />
        </div>
      </header>
    </main>
  </div>
);
