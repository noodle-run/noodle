import { constants } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-element-hover py-16">
      <div className="container flex justify-between">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" width={35} height={35} alt="Noodle Logo" />
            <span>Noodle</span>
          </Link>
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} NOODLE RUN LTD. All Rights
            Reserved.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12">
          <div className="text-sm">
            <h3 className="pb-4 text-foreground-muted">GENERAL</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <a
                  href={constants.github_repo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h3 className="pb-4 text-foreground-muted">SOCIAL</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={constants.twitter}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  X/Twitter
                </a>
              </li>
              <li>
                <a
                  href={constants.discord}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h3 className="pb-4 text-foreground-muted">MORE</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/tos">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
