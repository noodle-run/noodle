import { t } from '../utils/trpc';

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

export const greetingRouter = t.router({
  getGreeting: t.procedure.query(async ({ ctx }) => {
    const userName = ctx.session?.user?.name;
    const quote = fetch('https://api.quotable.io/random?minLength=80').then(
      (res) => res.json() as Promise<QuoteType>,
    );

    const date = new Date();
    const currentHour = date.getHours();

    let greeting = 'Good evening';

    if (currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour < 18) {
      greeting = 'Good afternoon';
    }

    if (userName) {
      return {
        quote: quote.then((res) => `"${res.content}" - ${res.author}`),
        greeting: `${greeting}, ${userName}!`,
      };
    }

    return {
      quote: quote.then((res) => `"${res.content}" - ${res.author}`),
      greeting: `${greeting}!`,
    };
  }),
});
