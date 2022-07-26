import { styled } from '@noodle/stitches';

export const Container = styled('div', {
  width: '100%',
  margin: '0 auto',

  '@sm': {
    maxWidth: '640px',
  },
  '@md': {
    maxWidth: '768px',
  },
  '@lg': {
    maxWidth: '1024px',
  },
  '@xl': {
    maxWidth: '1280px',
  },
  '@2xl': {
    maxWidth: '1536px',
  },
});
