import { normalize } from 'stitches-normalize-css';
import { globalCss } from './stitches.config';

export const globalStyles = globalCss(...normalize, {
  '*': {
    boxSizing: 'border-box',
  },
  'html, body': {
    height: '100%',
    width: '100%',
  },
  body: {
    fontFamily: '$body',
    backgroundColor: '$gray1',
    m: '0px',
    p: '0px',
    color: '$gray12',
  },
  'h1, h2, h3, h4, h5, h6, p': {
    fontSize: '$base',
    fontWeight: '$normal',
    lineHeight: '$none',
    p: '0px',
    m: '0px',
    color: '$gray12',
  },
  button: {
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: '$body',
    p: '0px',
    m: '0px',
    fontSize: '$base',
    color: '$gray12',
  },
  ul: {
    p: '0px',
    m: '0px',
    listStyle: 'none',
  },
  input: {
    backgroundColor: 'transparent',
  },
});
