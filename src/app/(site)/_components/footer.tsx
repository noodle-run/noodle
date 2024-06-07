import { constants } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const footerLinkSections = [
  {
    section: 'GENERAL',
    links: [
      {
        title: 'Blog',
        url: '/blog',
      },
      {
        title: 'Contribute',
        url: constants.github_repo,
      },
    ],
  },
  {
    section: 'SOCIAL',
    links: [
      {
        title: 'Twitter',
        url: constants.twitter,
      },
      {
        title: 'Discord',
        url: constants.discord,
      },
    ],
  },
  {
    section: 'LEGAL',
    links: [
      {
        title: 'Terms of Service',
        url: '/tos',
      },
      {
        title: 'Privacy Policy',
        url: '/privacy',
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-gray-element py-12 lg:py-16">
      <div className="container flex flex-col justify-between md:flex-row">
        <div className="order-2 space-y-4 md:order-1">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" width={24} height={24} alt="Noodle Logo" />
            <span>Noodle</span>
          </Link>
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} NOODLE RUN LTD. All Rights
            Reserved.
          </p>
        </div>
        <div className="order-1 mb-10 grid grid-cols-3 gap-0 md:order-2 md:mb-0 md:gap-12">
          {footerLinkSections.map(({ section, links }) => (
            <div className="text-sm" key={section}>
              <h3 className="pb-4 text-foreground-muted">{section}</h3>
              <ul className="flex flex-col gap-2">
                {links.map(({ title, url }) => (
                  <li key={title}>
                    {url.startsWith('/') ? (
                      <Link href={url}>{title}</Link>
                    ) : (
                      <a href={url} target="_blank" rel="noreferrer noopener">
                        {title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
