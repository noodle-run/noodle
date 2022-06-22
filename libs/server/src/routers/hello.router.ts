import * as z from 'zod';
import { createRouter } from '../utils/createRouter';

export const hello = createRouter().query('getGreeting', {
  input: z.object({
    greeting: z.string().optional(),
  }),
  resolve({ input }) {
    return {
      greeting: `Hello ${input.greeting ?? 'world'}`,
    };
  },
});
