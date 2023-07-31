import { clerkClient } from '@clerk/nextjs';
import fetch from 'node-fetch';

import { protectedProcedure } from '../middlewares/auth';
import { createRouter } from '../setup/trpc';

type QuoteType = {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

export const greetingRouter = createRouter({
  get: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.auth.userId;
    const user = userId ? await clerkClient.users.getUser(userId) : null;

    const name = user?.firstName;

    const quote = await fetch(
      'https://api.quotable.io/random?minLength=100&maxLength=140',
    ).then((res) => res.json() as Promise<QuoteType>);

    const date = new Date();
    const currentHour = date.getHours();
    let greeting = 'Good evening';

    if (currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour < 18) {
      greeting = 'Good afternoon';
    }

    return {
      greeting: `${greeting}${name ? `, ${name}` : ''}!`,
      quote: `"${quote.content}" - ${quote.author}`,
    };
  }),
});
