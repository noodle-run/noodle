/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ['**/e2e/**/*.test.ts', '**/e2e/**/*.spec.ts'],
      extends: ['plugin:playwright/playwright-test'],
    },
  ],
};

module.exports = config;
