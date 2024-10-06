import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/utils/base-url';

/**
 * This function returns an object that represents the robots.txt file which
 * next.js uses to create the robots.txt file.
 * @returns The robots.txt file configuration.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
