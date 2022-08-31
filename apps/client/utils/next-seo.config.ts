import { DefaultSeo } from 'next-seo';
import { ComponentProps } from 'react';

export const nextSEO: ComponentProps<typeof DefaultSeo> = {
  title: 'Noodle - Open source education platform',
  description:
    'Noodle is an open source education platform for students to maximize their productivity.',
  canonical: 'https://noodle.run',
  openGraph: {
    url: 'https://noodle.run',
    title: 'Noodle - Open source education platform',
    description:
      'Noodle is an open source education platform for students to maximize their productivity.',
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
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
};
