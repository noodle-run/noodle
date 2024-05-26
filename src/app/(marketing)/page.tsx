import Link from 'next/link';
import { ChevronRightIcon, StarIcon } from 'lucide-react';

import { constants } from '@/constants';
import { Button } from '@/primitives/button';

import { HomePreview } from './_components/home-preview';

/**
 * The marketing home page.
 * @returns A react component representing the marketing home page.
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 pt-24">
      <Button variant="outline" asChild className="rounded-full font-normal">
        <a
          href={constants.github_repo}
          target="_blank"
          rel="noreferrer noopener"
        >
          Star us on GitHub{' '}
          <StarIcon className="fill-amber-500 stroke-amber-500" size={16} />
        </a>
      </Button>
      <h1 className="max-w-[20ch] bg-gradient-to-b from-foreground to-gray-solid-hover bg-clip-text text-center text-8xl font-extrabold leading-none text-transparent">
        {constants.tagline}
      </h1>
      <p className="max-w-[50ch] text-center text-lg text-foreground-muted [&>strong]:font-medium [&>strong]:text-foreground">
        Noodle is an <strong>open-source</strong> student productivity platform
        made to <strong>streamline</strong> the process students conduct their
        studies and organize it.
      </p>
      <Button className="mt-6 rounded-full" size="lg" asChild>
        <Link href="/early-access">
          Get early access <ChevronRightIcon size={20} strokeWidth={2.5} />
        </Link>
      </Button>
      <HomePreview />
    </main>
  );
}
