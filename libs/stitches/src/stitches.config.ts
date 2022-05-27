import { createStitches } from '@stitches/react';
import { colors } from './colors';

export const {
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  config,
  createTheme,
} = createStitches({
  theme: {
    colors: colors.light,
    fonts: {
      body: 'Inter',
    },
  },
});

export const darkTheme = createTheme({
  colors: colors.dark,
});
