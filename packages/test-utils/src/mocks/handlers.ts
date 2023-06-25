import { trpcMsw } from './trpcMsw';

export const handlers = [
  trpcMsw.greeting.hello.query((req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({ message: `Hello ${req.getInput().name ?? 'World'}` }),
    );
  }),
];
