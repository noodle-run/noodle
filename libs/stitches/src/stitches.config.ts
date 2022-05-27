import { createStitches } from '@stitches/react';
import { colors } from './colors';
import { radii } from './radii';
import { sizes } from './sizes';
import { space } from './space';
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
    radii,
    space,
    sizes,
  },
});

export const darkTheme = createTheme({
  colors: colors.dark,
});
