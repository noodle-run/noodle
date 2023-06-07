/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: [
        '**/src/**/*.test.ts',
        '**/src/**/*.test.tsx',
        '**/src/**/*.spec.ts',
        '**/src/**/*.spec.tsx',
      ],
      extends: [
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'plugin:vitest/recommended',
      ],
      plugins: ['no-only-tests'],
      rules: {
        'no-only-tests/no-only-tests': 'error',
      },
    },
  ],
};

module.exports = config;
