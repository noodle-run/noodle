/** @type {import('eslint').Linter.Config} */
const config = {
  ignorePatterns: [
    'node_modules',
    'dist',
    '.next',
    'coverage',
    'storybook-static',
    'tmp',
    'pnpm-lock.yaml',
  ],
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  parserOptions: {
    project: true,
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'eslint-comments/no-unused-disable': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};

module.exports = config;
