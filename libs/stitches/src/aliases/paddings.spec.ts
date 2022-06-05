import { paddings } from './paddings';

describe('padding aliases', () => {
  it('returns the padding property when p is used', () => {
    expect(paddings.p('0px')).toEqual({ padding: '0px' });
  });

  it('returns padding right and left when px is used', () => {
    expect(paddings.px('0px')).toEqual({
      paddingLeft: '0px',
      paddingRight: '0px',
    });
  });

  it('returns padding top and bottom when py is used', () => {
    expect(paddings.py('0px')).toEqual({
      paddingTop: '0px',
      paddingBottom: '0px',
    });
  });

  it('returns paddingTop when pt is used', () => {
    expect(paddings.pt('0px')).toEqual({ paddingTop: '0px' });
  });

  it('returns paddingBottom when pb is used', () => {
    expect(paddings.pb('0px')).toEqual({ paddingBottom: '0px' });
  });
});
