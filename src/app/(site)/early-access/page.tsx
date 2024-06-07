import type { Metadata } from 'next';
import { JoinEarlyAccessForm } from './_forms/join';
import { constructMetadata } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'Early Access - Noodle',
  description: 'Join us on our journey to improve student productivity.',
});

export default function EarlyAccessPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 py-12 md:py-16 lg:py-24">
      <h1 className="hidden max-w-[20ch] text-balance bg-gradient-to-b from-foreground to-gray-foreground-muted bg-clip-text text-center text-5xl font-extrabold leading-none text-transparent sm:block md:text-6xl lg:text-7xl">
        Join us on our journey to improve student productivity
      </h1>
      <h1 className="block max-w-[20ch] text-balance bg-gradient-to-b from-foreground to-gray-foreground-muted bg-clip-text text-center text-5xl font-extrabold leading-none text-transparent sm:hidden md:text-6xl lg:text-7xl">
        Join us on our journey
      </h1>
      <p className="max-w-prose text-balance text-center text-lg text-foreground-muted [&>strong]:font-medium [&>strong]:text-foreground">
        Sign up to our <strong>early access list</strong> and be the{' '}
        <strong>first to get</strong> updates and access to the platform{' '}
        <strong>before the wider public</strong>.
      </p>
      <JoinEarlyAccessForm />
    </main>
  );
}
