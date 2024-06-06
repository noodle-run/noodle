import * as Sentry from '@sentry/nextjs';
import { env } from '@/env';

Sentry.init({
  dsn: env.SENTRY_DSN,
  tracesSampleRate: 1,
  debug: true,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,

  // We can remove this option if we won't use the Sentry Session Replay feature:
  // integrations: [
  //   Sentry.replayIntegration({
  // Additional Replay configuration goes in here, for example:
  // maskAllText: true,
  // blockAllMedia: true,
  //   }),
  // ],
});
