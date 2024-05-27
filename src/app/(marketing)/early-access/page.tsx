import type { Metadata } from 'next';
import { JoinEarlyAccessForm } from './_forms/join';
import { constructMetadata } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'Early Access - Noodle',
  description: 'Join us on our journey to improve student productivity.',
});

export default function EarlyAccessPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 pt-24">
      <h1 className="text-balance bg-gradient-to-b from-foreground to-gray-foreground-muted bg-clip-text text-center text-7xl font-extrabold leading-none text-transparent">
        Join us on our journey to improve student productivity.
      </h1>
      <p className="max-w-prose text-balance text-center text-lg text-foreground-muted [&>strong]:font-medium [&>strong]:text-foreground">
        Signing up to our <strong>early access list</strong> gets you on a list
        that will be the <strong>first to know</strong> about updates and
        getting access to the platform <strong>before the wider public</strong>.
      </p>
      <JoinEarlyAccessForm />
    </main>
  );
}
