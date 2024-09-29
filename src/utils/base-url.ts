import { env } from '@/env';

/**
 * A utility function to get the base URL of the current instance.
 * @returns The base URL.
 */
export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  if (env['VERCEL_URL']) {
    return `https://${env.VERCEL_URL}`;
  }
  return `http://localhost:${String(env.PORT)}`;
}
