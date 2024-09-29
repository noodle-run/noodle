import type { Metadata } from 'next';

import { constants } from '@/constants';
import { getBaseUrl } from './base-url';

/**
 * A utility function to construct metadata for the application which can be
 * used per page.
 * @param params - The parameters for the metadata.
 * @param params.title The title of the page.
 * @param params.description The description of the page.
 * @param params.image The image of the page.
 * @param params.icons The icons of the page.
 * @param params.noIndex Whether to no-index the page.
 * @param params.url The URL of the page.
 * @param params.type The type of the page, either 'website' or 'article'.
 * @param params.publishedTime The published time of the article.
 * @returns The metadata for the page.
 */
export function constructMetadata({
  title = constants.name,
  description = constants.description,
  image = `${getBaseUrl()}/thumbnail.jpg`,
  icons = [
    {
      rel: 'apple-touch-icon',
      sizes: '32x32',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
  ],
  noIndex = false,
  url = getBaseUrl(),
  type = 'website',
  publishedTime,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata['icons'];
  noIndex?: boolean;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type,
      publishedTime,
      ...(image && {
        images: [
          {
            url: image,
          },
        ],
      }),
    },
    twitter: {
      title,
      description,
      ...(image && {
        card: 'summary_large_image',
        images: [image],
      }),
      creator: constants.twitter_handle,
    },
    icons,
    metadataBase: new URL(getBaseUrl()),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
