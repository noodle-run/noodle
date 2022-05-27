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
  },
  'h1, h2, h3, h4, h5, h6, p': {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1,
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
    fontSize: '1rem',
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
