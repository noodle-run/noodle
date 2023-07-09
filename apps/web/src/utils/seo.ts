import { type DefaultSeoProps } from 'next-seo';

import { constants } from './constants';

export const seo: DefaultSeoProps = {
  title: constants.title,
  description: constants.description,
  canonical: constants.url,
  openGraph: {
    url: constants.url,
    title: constants.title,
    description: constants.description,
    images: [
      {
        url: `${constants.url}/preview_card.png`,
        width: 1200,
        height: 628,
        alt: constants.title,
      },
    ],
    site_name: constants.name,
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
