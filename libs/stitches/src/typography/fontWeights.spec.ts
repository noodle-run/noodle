import { fontWeights } from './fontWeights';

describe('font weights', () => {
  it('returns three weights', () => {
    expect(Object.keys(fontWeights).length).toBe(3);
  });
});
