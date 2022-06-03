// eslint-disable-next-line import/no-relative-packages
import rootMain from '../../../.storybook/main';

export default {
  ...rootMain,
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    builder: 'webpack5',
  },
  features: {
    interactionsDebugger: true,
  },
};
