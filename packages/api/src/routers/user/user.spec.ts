import { type User } from '@noodle/db';

import { userRouter } from '.';
import { prismaMock } from '../../../vitest.setup';
import { createInnerContext } from '../../setup/context';

describe('User router', () => {
  let caller: ReturnType<typeof userRouter.createCaller>;

  beforeEach(() => {
    caller = userRouter.createCaller(createInnerContext({ session: null }));
  });

  it('should return all users', async () => {
    const users: User[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        emailVerified: new Date(),
        image: 'https://example.com/johndoe.png',
      },
      {
        id: '2',
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
        emailVerified: new Date(),
        image: 'https://example.com/janedoe.png',
      },
    ];

    prismaMock.user.findMany.mockResolvedValue(users);

    await expect(caller.find.all()).resolves.toEqual(users);
  });
});
