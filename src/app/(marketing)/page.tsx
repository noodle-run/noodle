import Link from 'next/link';
import {
  ChevronRightIcon,
  ClipboardCheckIcon,
  DiamondIcon,
  Edit3Icon,
  ListChecksIcon,
  StarIcon,
} from 'lucide-react';

import { constants } from '@/constants';
import { Button } from '@/primitives/button';

import Image from 'next/image';

const shortFeaturesIconSize = 30;

const shortFeatures = [
  {
    icon: <Edit3Icon size={shortFeaturesIconSize} />,
    title: 'Note Taking',
    description: 'Write your study notes and let Noodle take care of the rest.',
  },
  {
    icon: <DiamondIcon size={shortFeaturesIconSize} />,
    title: 'Flashcards',
    description:
      'Create flashcards with reminders or let AI auto-suggest them for you.',
  },
  {
    icon: <ListChecksIcon size={shortFeaturesIconSize} />,
    title: 'Task Management',
    description:
      'Create module specific tasks to keep on track with what you need to do.',
  },
  {
    icon: <ClipboardCheckIcon size={shortFeaturesIconSize} />,
    title: 'Grade Tracking',
    description: 'Find out what you need to achieve to stay in progression.',
  },
];

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
      <h1 className="max-w-[20ch] text-balance bg-gradient-to-b from-foreground to-gray-foreground-muted bg-clip-text text-center text-8xl font-extrabold leading-none text-transparent">
        {constants.tagline}
      </h1>
      <p className="max-w-[50ch] text-pretty text-center text-lg text-foreground-muted [&>strong]:font-medium [&>strong]:text-foreground">
        Noodle is an <strong>open-source</strong> student productivity platform
        made to <strong>streamline</strong> the process students conduct their
        studies and organize it.
      </p>
      <Button className="mt-6 rounded-full" size="lg" asChild>
        <Link href="/early-access">
          Get early access <ChevronRightIcon size={20} strokeWidth={2.5} />
        </Link>
      </Button>
      <Image
        src="/_static/dark-dashboard-preview.jpg"
        width={1920}
        height={1080}
        alt="Dashboard Preview"
        className="my-12 rounded-lg shadow-[0_50px_200px_75px] shadow-pink/10"
      />
      <section className="my-36 grid grid-cols-4 gap-12">
        {shortFeatures.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-2">
            {feature.icon}
            <h3 className="pt-2 text-xl font-medium">{feature.title}</h3>
            <p className="text-foreground-muted">{feature.description}</p>
          </div>
        ))}
      </section>
      <section className="flex flex-col items-center gap-6">
        <h2 className="max-w-[20ch] text-balance bg-gradient-to-b from-foreground to-gray-foreground-muted bg-clip-text text-center text-6xl font-extrabold leading-tight text-transparent">
          One Platform to Rule Them All
        </h2>
        <p className="max-w-[45ch] text-pretty text-center text-lg text-foreground-muted [&>strong]:font-medium [&>strong]:text-foreground">
          A one of a kind platform, combining all the necessary productivity
          tools a student needs to stay on top of their work.
        </p>
      </section>
    </main>
  );
}
