import { constants } from '@/constants';
import { env } from '@/env';

/**
 * This is used to get the base URL of the assets that the email templates can use.
 * @returns The correct URL.
 */
export const emailBaseUrl = () => {
  if (env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }

  if (env.VERCEL_URL) {
    return `https://${env.VERCEL_URL}`;
  }

  return `https://${constants.domain}`;
};
