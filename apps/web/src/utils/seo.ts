import { type DefaultSeoProps } from 'next-seo';

export const seo: DefaultSeoProps = {
  title: 'Noodle | Rethinking Student Productivity',
  description:
    'Noodle is a productivity app for students. It helps you manage your time, tasks, and goals.',
  canonical: 'https://noodle.run',
  openGraph: {
    url: 'https://noodle.run',
    title: 'Noodle | Rethinking Student Productivity',
    description:
      'Noodle is a productivity app for students. It helps you manage your time, tasks, and goals.',
    images: [
      {
        url: 'https://noodle.run/preview_card.png',
        width: 1200,
        height: 628,
        alt: 'Noodle - Open source education platform',
      },
    ],
    site_name: 'Noodle',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};
