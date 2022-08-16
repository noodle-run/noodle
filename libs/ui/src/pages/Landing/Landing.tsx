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
          <a
            href="https://github.com/ixahmedxi/noodle/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noreferrer noopener"
            className="px-4 py-2 text-sm font-semibold text-black transition-colors rounded-lg md:text-base dark:bg-zinc-700 dark:hover:bg-zinc-800 bg-zinc-200 hover:bg-zinc-300 dark:text-white"
          >
            Contribute
          </a>
        </div>
      </header>
    </main>
    <div className="absolute w-full px-6 -translate-x-1/2 lg:w-2/3 xl:w-1/2 bottom-24 -z-10 left-1/2 drop-shadow-md shadow-primary-500">
      <Image src="/preview.png" alt="Preview" width={1920} height={1080} />
    </div>
  </div>
);
