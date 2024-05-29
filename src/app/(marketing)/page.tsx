import Link from 'next/link';
import { ChevronRightIcon, StarIcon } from 'lucide-react';

import { constants, features } from '@/constants';
import { Button } from '@/primitives/button';

import Image from 'next/image';

/**
 * The marketing home page.
 * @returns A react component representing the marketing home page.
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 lg:pt-24">
      <Button
        variant="outline"
        asChild
        className="mb-6 rounded-full font-normal"
      >
        <a
          href={constants.github_repo}
          target="_blank"
          rel="noreferrer noopener"
        >
          Star us on GitHub{' '}
          <StarIcon className="fill-amber-500 stroke-amber-500" size={16} />
        </a>
      </Button>
      <h1 className="max-w-[20ch] text-balance bg-gradient-to-b from-foreground to-gray-foreground-muted bg-clip-text text-center text-5xl font-extrabold leading-none text-transparent md:text-6xl lg:text-8xl">
        {constants.tagline}
      </h1>
      <p className="mt-6 max-w-[50ch] text-pretty text-center text-foreground-muted lg:text-lg [&>strong]:font-medium [&>strong]:text-foreground">
        <strong>open-source</strong> student productivity platform made to{' '}
        <strong>streamline</strong> the process students conduct their studies
        and organize it.
      </p>
      <Button className="mt-9 rounded-full lg:mt-6" size="lg" asChild>
        <Link href="/early-access">
          Get early access <ChevronRightIcon size={20} strokeWidth={2.5} />
        </Link>
      </Button>
      <Image
        src="/_static/dark-dashboard-preview.jpg"
        width={1920}
        height={1080}
        alt="Dashboard Preview"
        className="mb-36 mt-24 rounded-lg shadow-[0_50px_200px_75px] shadow-pink/10"
      />
      <section
        id="features"
        className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-2 lg:mb-36 lg:grid-cols-4"
      >
        {features(30).map((feature) => (
          <div key={feature.title} className="flex flex-col gap-2">
            <div className="[&>svg]:w-6 md:[&>svg]:w-7 lg:[&>svg]:w-8">
              {feature.icon}
            </div>
            <h3 className="pt-2 font-medium lg:text-xl">{feature.title}</h3>
            <p className="text-pretty text-foreground-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
