import { Button } from '@/primitives/button';
import { Footer } from './(site)/_components/footer';
import { Navbar } from './(site)/_components/navbar';
import Link from 'next/link';
import { constants } from '@/constants';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="absolute left-0 top-0 z-[-1] h-56 w-full bg-gradient-to-b from-indigo-subtle to-background" />
      <Navbar />
      <div className="container flex flex-1">
        <main className="mb-4 flex flex-1 flex-col items-center justify-center gap-6">
          <div className="relative">
            <h1 className="text-9xl font-bold text-gray-foreground">404</h1>
          </div>
          <h2 className="text-4xl font-medium text-gray-foreground">
            Oops! Page not found
          </h2>
          <p className="max-w-prose text-balance text-center text-lg text-foreground-muted">
            It looks like this page has gone on an adventure. Maybe it&apos;s
            hanging out with all those missing socks from the laundry.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/">Return home</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={constants.support}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact support
              </a>
            </Button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
