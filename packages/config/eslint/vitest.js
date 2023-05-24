/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
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
