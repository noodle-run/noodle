import { margins } from './margins';

describe('margin aliases', () => {
  it('returns the margin property when m is used', () => {
    expect(margins.m('0px')).toEqual({ margin: '0px' });
  });

  it('returns margin right and left when mx is used', () => {
    expect(margins.mx('0px')).toEqual({
      marginLeft: '0px',
      marginRight: '0px',
    });
  });

  it('returns margin top and bottom when my is used', () => {
    expect(margins.my('0px')).toEqual({
      marginTop: '0px',
      marginBottom: '0px',
    });
  });

  it('returns marginTop when mt is used', () => {
    expect(margins.mt('0px')).toEqual({ marginTop: '0px' });
  });

  it('returns marginBottom when mb is used', () => {
    expect(margins.mb('0px')).toEqual({ marginBottom: '0px' });
  });
});
