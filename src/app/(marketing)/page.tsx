import { StarIcon } from 'lucide-react';

import { constants } from '@/constants';

/**
 * The marketing home page.
 *
 * @returns A react component representing the marketing home page.
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 pt-24">
      <a
        href="https://github.com"
        className="flex items-center gap-3 rounded-full border bg-gray-subtle px-4 py-2 text-sm text-foreground-muted"
      >
        Star us on GitHub{' '}
        <StarIcon className="fill-amber-500 stroke-amber-500" size={16} />
      </a>
      <h1 className="bg-gradient-to-b from-foreground to-gray-solid-hover bg-clip-text text-center text-8xl font-extrabold leading-none text-transparent">
        {constants.tagline}
      </h1>
      <p className="max-w-[50ch] text-center text-lg text-foreground-muted [&>strong]:font-medium [&>strong]:text-foreground">
        Noodle is an <strong>open-source</strong> student productivity platform
        made to <strong>streamline</strong> the process students conduct their
        studies and organize it.
      </p>
    </main>
  );
}
