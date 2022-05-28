import { sizes } from '.';
import { space } from '../space';

describe('sizes', () => {
  it('includes all the spaces', () => {
    expect(sizes).toMatchObject(space);
  });

  it('includes screen height and width values', () => {
    expect(sizes['screen-w']).toBe('100vw');
    expect(sizes['screen-h']).toBe('100vh');
  });

  it('includes min, max and fit values', () => {
    expect(sizes.min).toBe('min-content');
    expect(sizes.max).toBe('max-content');
    expect(sizes.fit).toBe('fit-content');
  });

  it('includes percentage values', () => {
    expect(sizes.half).toBe('50%');
    expect(sizes.third).toBe('33.333333%');
    expect(sizes.twoThirds).toBe('66.666667%');
    expect(sizes.quarter).toBe('25%');
    expect(sizes.threeQuarters).toBe('75%');
    expect(sizes.fifth).toBe('20%');
    expect(sizes.twoFifth).toBe('40%');
    expect(sizes.threeFifth).toBe('60%');
    expect(sizes.fourFifth).toBe('80%');
    expect(sizes.full).toBe('100%');
  });
});
