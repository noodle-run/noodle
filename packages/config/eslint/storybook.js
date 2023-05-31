/** @type {import('eslint').Linter.Config} */
const config = {
  ignorePatterns: ['!storybook/**/*'],
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      extends: [
        'plugin:storybook/recommended',
        'plugin:storybook/csf-strict',
        'plugin:storybook/csf',
      ],
      rules: {
        'storybook/no-title-property-in-meta': 'off',
      },
    },
  ],
};

module.exports = config;
