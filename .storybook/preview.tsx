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
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages', '*'],
    },
  },
};

export const decorators = [
  (renderStory: () => ReactNode) => {
    const isDark = useDarkMode();
    return <div className={isDark ? 'dark-layout' : ''}>{renderStory()}</div>;
  },
];
