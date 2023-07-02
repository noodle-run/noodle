import { createInnerContext } from '../setup/context';
import { createRouter } from '../setup/trpc';
import { fakeSession } from '../utils/fake';
import { protectedProcedure } from './auth';

describe('Auth Middleware', () => {
  it('should error if not authenticated', async () => {
    const router = createRouter({
      hello: protectedProcedure.query(() => 'hello world'),
    }).createCaller(createInnerContext({ session: null }));

    await expect(router.hello()).rejects.toThrow('UNAUTHORIZED');
  });

  it('should allow if authenticated', async () => {
    const router = createRouter({
      hello: protectedProcedure.query(() => 'hello world'),
    }).createCaller(
      createInnerContext({
        session: fakeSession,
      }),
    );

    await expect(router.hello()).resolves.toBe('hello world');
  });
});
