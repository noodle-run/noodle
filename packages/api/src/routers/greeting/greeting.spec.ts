import { greetingRouter } from '.';
import { createInnerContext } from '../../setup/context';

describe('Hello router', () => {
  it('should return hello world without inputs', async () => {
    const context = createInnerContext({
      session: null,
    });
    const caller = greetingRouter.createCaller(context);

    const result = await caller.hello({});

    expect(result).toEqual({
      message: 'Hello World',
    });
  });
});
