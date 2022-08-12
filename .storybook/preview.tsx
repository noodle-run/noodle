import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/900.css';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import { ThemeVars } from '@storybook/theming';
import { ReactNode } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import './globals.css';
import { dark, light } from './theme';

type DocsParamType = {
  theme: ThemeVars;
};

export const parameters = {
  darkMode: {
    dark: { ...dark },
    light: { ...light },
    darkClass: 'dark',
    classTarget: 'html',
    stylePreview: true,
  },
  docs: {
    container: (props: DocsContainerProps) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const isDark = useDarkMode();

      const { id: storyId, storyById } = props.context;
      const {
        parameters: { docs = {} },
      } = storyById(storyId);
      (docs as DocsParamType).theme = isDark ? dark : light;

      return (
        <div className={isDark ? 'dark-layout' : 'light'}>
          <DocsContainer {...props} />
        </div>
      );
    },
  },
  layout: 'fullscreen',
};

export const decorators = [
  (renderStory: () => ReactNode) => {
    const isDark = useDarkMode();
    return <div className={isDark ? 'dark-layout' : ''}>{renderStory()}</div>;
  },
];
