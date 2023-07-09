/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  globals: {
    React: 'writable',
  },
  rules: {
    'react/prop-types': 'off',
    'react/no-unknown-property': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
};

module.exports = config;
