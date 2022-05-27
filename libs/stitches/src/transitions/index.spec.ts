import { easing, timing, transitions } from '.';

describe('transitions', () => {
  it.each(Object.entries(transitions))(
    'includes the easing and timing in %s',
    (_, value) => {
      expect(value.includes(easing) && value.includes(timing)).toBeTruthy();
    },
  );
});
