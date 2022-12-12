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
    const name = ctx.session?.user?.name;
    const quote = await fetch(
      'https://api.quotable.io/random?minLength=80',
    ).then((res) => res.json() as Promise<QuoteType>);

    const date = new Date();
    const currentHour = date.getHours();
    let greeting = 'Good evening';

    if (currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour < 18) {
      greeting = 'Good afternoon';
    }

    if (name) {
      return {
        greeting: `${greeting}, ${name.split(' ')[0]}!`,
        quote: `"${quote.content}" - ${quote.author}`,
      };
    }

    return {
      greeting: `${greeting}!`,
      quote: `"${quote.content}" - ${quote.author}`,
    };
  }),
});
