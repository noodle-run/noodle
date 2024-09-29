import { earlyAccessTable } from '@/db/schema';
import { createRouter, publicProcedure } from '../trpc';
import EarlyAccessJoinedEmail from '@/emails/templates/early-access-joined';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

const nonHumanEmailDomains = [
  '@no-reply',
  '@noreply',
  '@notifications',
  '@alerts',
  '@mailer',
  '@updates',
  '@system',
  '@bot',
  '@mailchimp.com',
  '@sendgrid.net',
  '@postmarkapp.com',
  '@amazonaws.com',
  '@mailgun.org',
  '@constantcontact.com',
  '@sendinblue.com',
  '@intercom.io',
  '@intercom-mail.com',
  '@zendesk.com',
  '@freshdesk.com',
  '@helpscout.net',
  '@tawk.to',
  '@hubspot.com',
  '@salesforce.com',
  '@marketo.com',
  '@pipedrive.com',
  '@drip.com',
  '@activecampaign.com',
  '@autopilotmail.com',
  '@slack.com',
  '@jira.com',
  '@trello.com',
  '@asana.com',
  '@monday.com',
  '@github.com',
  '@gitlab.com',
  '@bitbucket.org',
  '@paypal.com',
  '@stripe.com',
  '@shopify.com',
  '@bigcommerce.com',
  '@facebookmail.com',
  '@linkedin.com',
  '@twitter.com',
  '@pinterest.com',
  '@redditmail.com',
  '@medium.com',
];

const automatedKeywordsInUsername = [
  'noreply',
  'no-reply',
  'admin',
  'support',
  'system',
  'notifications',
  'bot',
  'helpdesk',
  'service',
  'info',
  'alerts',
  'updates',
  'newsletter',
  'mailer',
  'auto',
  'daemon',
  'bounce',
  'team',
  'noreplys',
  'customerservice',
  'contact',
  'autoresponder',
];

function isEmailGibberish(username: string): boolean {
  const vowelCount = username.replace(/[^aeiou]/gi, '').length;
  const consonantCount = username.replace(/[^bcdfghj-np-tv-z]/gi, '').length;

  return (
    vowelCount === 0 ||
    (consonantCount > 8 && vowelCount < 2) ||
    (username.length > 10 && vowelCount < 3)
  );
}

function hasAlternatingCharsAndNumbers(username: string): boolean {
  // eslint-disable-next-line security/detect-unsafe-regex, regexp/no-super-linear-backtracking
  const alternatingPattern = /^(?:[a-z]+\d+|\d+[a-z]+)+$/i;
  return alternatingPattern.test(username);
}

function scoreEmail(email: string): number {
  let score = 0;

  const [username, domain] = email.split('@');

  if (!username || !domain) {
    return 100;
  }

  if (nonHumanEmailDomains.some((d) => email.endsWith(d))) {
    score += 50;
  }
  if (
    automatedKeywordsInUsername.some((keyword) =>
      username.toLowerCase().includes(keyword),
    )
  ) {
    score += 30;
  }

  if (username.length > 32) {
    score += 10;
  } else if (username.length > 24) {
    score += 5;
  }

  const numberCount = username.replace(/\D/g, '').length;
  const numberDensity = numberCount / username.length;
  if (numberDensity > 0.5) {
    score += 15;
  } else if (numberDensity > 0.3) {
    score += 10;
  } else if (numberDensity > 0.1) {
    score += 5;
  }

  if (isEmailGibberish(username)) {
    score += 20;
  }

  if (hasAlternatingCharsAndNumbers(username)) {
    score += 15;
  }

  const specialCharCount = username.replace(/[a-z0-9]/gi, '').length;
  const specialCharDensity = specialCharCount / username.length;
  if (specialCharDensity > 0.3) {
    score += 15;
  } else if (specialCharDensity > 0.2) {
    score += 10;
  } else if (specialCharDensity > 0.1) {
    score += 5;
  }

  return score;
}

function isLikelyHuman(email: string, threshold = 30): boolean {
  const emailScore = scoreEmail(email);
  return emailScore < threshold;
}

export const earlyAccessRouter = createRouter({
  joinEarlyAccess: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, { message: 'Name is too short' }),
        email: z.string().email({ message: 'Invalid email address' }).min(5),
        reason: z.enum(['student', 'project', 'both']).default('student'),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { email, name, reason } = input;
      const { db, resend } = ctx;

      const emailHuman = isLikelyHuman(email);

      if (!emailHuman) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Please use a valid email address.',
        });
      }

      await db
        .insert(earlyAccessTable)
        .values({
          email,
          name,
          reason,
        })
        .catch((err: unknown) => {
          if (err instanceof Error) {
            if (
              err.message.includes(
                'duplicate key value violates unique constraint',
              )
            ) {
              throw new TRPCError({
                code: 'BAD_REQUEST',
                cause: err,
                message: 'This email is already on the early access list.',
              });
            }

            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              cause: err,
              message:
                'An error occurred while adding you to the early access list. Please try again later.',
            });
          }
        });

      await resend.emails
        .send({
          from: 'Noodle <contact@noodle.run>',
          to: email,
          subject: "You are on Noodle's early access list!",
          react: EarlyAccessJoinedEmail({ name, email }),
        })
        .catch((err: unknown) => {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            cause: err,
            message:
              'An error occurred while adding you to the early access list. Please try again later.',
          });
        });
    }),
});
