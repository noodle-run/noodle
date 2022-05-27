import { borderWidths } from '.';

describe('border widths', () => {
  it('includes default width of 1px', () => {
    expect(borderWidths.base).toBe('1px');
  });

  it('includes semiThick width of 2px', () => {
    expect(borderWidths.semiThick).toBe('2px');
  });

  it('includes thick width of 4px', () => {
    expect(borderWidths.thick).toBe('4px');
  });
});
