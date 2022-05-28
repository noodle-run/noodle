/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */

import {
  darkTheme,
  globalStyles,
  StitchesProvider,
  styled,
} from '../libs/stitches/src';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import { ThemeVars } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { Story } from '@storybook/react';
import { dark, light } from './theme';
import { FC, ReactNode } from 'react';
globalStyles();

type DocsParamType = {
  theme: ThemeVars;
};

export const parameters = {
  darkMode: {
    dark: { ...dark },
    light: { ...light },
  },
  docs: {
    container: (props: DocsContainerProps) => {
      const isDark = useDarkMode();

      const { id: storyId, storyById } = props.context;
      const {
        parameters: { docs = {} },
      } = storyById(storyId);
      (docs as DocsParamType).theme = isDark ? dark : light;

      return (
        <div className={isDark ? darkTheme : ''}>
          <DocsContainer {...props} />
        </div>
      );
    },
  },
  layout: 'fullscreen',
};

const Wrapper = styled('div', {
  height: '$screen-h',
  width: '$screen-w',
  backgroundColor: '$gray1',
  color: '$gray12',
});

export const decorators = [
  (renderStory: () => ReactNode) => {
    const isDark = useDarkMode();

    return (
      <div className={isDark ? darkTheme : ''}>
        <Wrapper>{renderStory()}</Wrapper>
      </div>
    );
  },
];

/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable react-hooks/rules-of-hooks */
