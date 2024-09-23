import type { ClassValue } from 'clsx';
import type { Metadata } from 'next';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { constants } from '@/constants';
import { env } from '@/env';
import {
  amber,
  blue,
  bronze,
  brown,
  crimson,
  cyan,
  gold,
  grass,
  green,
  indigo,
  iris,
  jade,
  lime,
  mint,
  orange,
  pink,
  plum,
  purple,
  red,
  ruby,
  sky,
  teal,
  tomato,
  violet,
  yellow,
} from '@radix-ui/colors';

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

export function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w-]+/g, '')
    .replace(/-{2,}/g, '-');
}

export const staticUserColors = [
  tomato.tomato9,
  red.red9,
  ruby.ruby9,
  crimson.crimson9,
  pink.pink9,
  plum.plum9,
  purple.purple9,
  violet.violet9,
  iris.iris9,
  indigo.indigo9,
  blue.blue9,
  cyan.cyan9,
  teal.teal9,
  jade.jade9,
  green.green9,
  grass.grass9,
  bronze.bronze9,
  gold.gold9,
  brown.brown9,
  orange.orange9,
  amber.amber9,
  yellow.yellow9,
  lime.lime9,
  mint.mint9,
  sky.sky9,
];

export function getColorForUsername(
  username: string,
  colors = staticUserColors,
) {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    const char = username.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  const colorIndex = Math.abs(hash) % colors.length;
  // eslint-disable-next-line security/detect-object-injection
  const backgroundColor = colors[colorIndex] ?? 'gray';

  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  const color = luminance > 0.5 ? '#000000' : '#FFFFFF';

  return {
    backgroundColor,
    color,
  };
}
