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
    color: '$gray12',
  },
  'h1, h2, h3, h4, h5, h6, p': {
    fontSize: '$base',
    fontWeight: '$normal',
    lineHeight: '$none',
    padding: 0,
    margin: 0,
  },
  button: {
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: '$body',
    padding: 0,
    margin: 0,
    fontSize: '$base',
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  input: {
    backgroundColor: 'transparent',
  },
});
