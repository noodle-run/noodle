import { createStitches } from '@stitches/react';
import { colors } from './colors';
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './typography';

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
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
  },
});

export const darkTheme = createTheme({
  colors: colors.dark,
});
