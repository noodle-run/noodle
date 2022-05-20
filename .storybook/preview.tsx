/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */

import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import { ThemeVars } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { dark, light } from './theme';

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

      return <DocsContainer {...props} />;
    },
  },
};

/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable react-hooks/rules-of-hooks */
