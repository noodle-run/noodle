import { shadows } from '.';

describe('shadows', () => {
  it('includes the sm shadow', () => {
    expect(shadows.sm).toBe('0 1px 2px 0 rgb(0 0 0 / 0.05)');
  });

  it('includes the base shadow', () => {
    expect(shadows.base).toBe(
      '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    );
  });

  it('includes the md shadow', () => {
    expect(shadows.md).toBe(
      '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    );
  });

  it('includes the lg shadow', () => {
    expect(shadows.lg).toBe(
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    );
  });

  it('includes the xl shadow', () => {
    expect(shadows.xl).toBe(
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    );
  });

  it('includes the 2xl shadow', () => {
    expect(shadows['2xl']).toBe('0 25px 50px -12px rgb(0 0 0 / 0.25)');
  });

  it('includes the inner shadow', () => {
    expect(shadows.inner).toBe('inset 0 2px 4px 0 rgb(0 0 0 / 0.05)');
  });

  it('includes the none shadow', () => {
    expect(shadows.none).toBe('0 0 #0000');
  });
});
