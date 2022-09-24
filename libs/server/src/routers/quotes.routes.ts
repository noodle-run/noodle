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

export const quotesRouter = t.router({
  getQuote: t.procedure.query(async () => {
    const quote = fetch('https://api.quotable.io/random?minLength=80').then(
      (res) => res.json() as Promise<QuoteType>,
    );

    return quote;
  }),
});
