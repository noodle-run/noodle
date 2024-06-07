import { Button } from '@/primitives/button';
import { Footer } from './(site)/_components/footer';
import { Navbar } from './(site)/_components/navbar';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="absolute left-0 top-0 z-[-1] h-56 w-full bg-gradient-to-b from-indigo-subtle to-background" />
      <Navbar />
      <div className="container flex flex-1">
        <main className="mb-4 flex flex-1 flex-col items-center justify-center gap-4">
          <div className="w-full overflow-hidden rounded-lg md:w-3/4 lg:w-1/2">
            <div className="relative h-0 w-full pb-[56.25%]">
              <iframe
                title="anybody there gif"
                height="100%"
                src="https://giphy.com/embed/3wtMhcftw2RhR2Wl3s/video"
                className="absolute left-0 top-0"
                width="100%"
              ></iframe>
            </div>
          </div>
          <p className="text-balance text-center text-base text-foreground-muted md:text-lg">
            According to our very accurate records, this page does not exist.
          </p>
          <Button asChild size="lg">
            <Link href="/">Return home</Link>
          </Button>
        </main>
      </div>
      <Footer />
    </div>
  );
}
