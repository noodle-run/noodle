/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */

import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import { ThemeVars } from '@storybook/theming';
import React, { ReactNode, useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { darkTheme, globalStyles, styled } from '../libs/stitches/src';
import { dark, light } from './theme';
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
  options: {
    storySort: {
      order: [
        'Stitches',
        ['Introduction', '*'],
        'Design System',
        ['Quarks', '*'],
        '*',
      ],
    },
  },
};

const Wrapper = styled('div', {
  backgroundColor: '$gray1',
  color: '$gray12',
});

export const decorators = [
  (renderStory: () => ReactNode) => {
    const isDark = useDarkMode();

    useEffect(() => {
      if (isDark) {
        document.querySelector('.sb-show-main')?.classList.add(darkTheme);
      } else {
        document.querySelector('.sb-show-main')?.classList.remove(darkTheme);
      }
    }, [isDark]);

    return (
      <Wrapper className={isDark ? darkTheme : ''}>{renderStory()}</Wrapper>
    );
  },
];

/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable react-hooks/rules-of-hooks */
