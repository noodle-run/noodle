import { fonts } from './fonts';

describe('fonts', () => {
  it('contains the body inter font', () => {
    expect(fonts.body.startsWith('Inter')).toBeTruthy();
  });
});
