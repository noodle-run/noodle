const path = require('path');

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['noodle/react', 'noodle/next'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': [
      'error',
      path.join(__dirname, 'src', 'pages'),
    ],
  },
  settings: {
    next: {
      rootDir: 'apps/web',
    },
  },
};

module.exports = config;
