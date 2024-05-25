import type { ClassValue } from 'clsx';
import type { Metadata } from 'next';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { constants } from '@/constants';
import { env } from '@/env';

/**
 * A utility function to merge Tailwind CSS classes using a combination of clsx
 * and tailwind-merge.
 * @example
 *   import { cn } from '@lib/utils';
 *
 *   const classes = cn('text-black', 'bg-white', 'p-4');
 * @param inputs - The classes to merge.
 * @returns A string of the classes merged together.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * A utility function to get the base URL of the current instance.
 * @returns The base URL.
 */
export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  if (process.env['VERCEL_URL']) {
    return `https://${process.env['VERCEL_URL']}`;
  }
  return `http://localhost:${String(env.PORT)}`;
}

/**
 * A utility function to construct metadata for the application which can be
 * used per page.
 * @param params - The parameters for the metadata.
 * @param params.title The title of the page.
 * @param params.description The description of the page.
 * @param params.image The image of the page.
 * @param params.icons The icons of the page.
 * @param params.noIndex Whether to no-index the page.
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
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata['icons'];
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
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
