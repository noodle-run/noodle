/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ['noodle/base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
      './packages/*/tsconfig.json',
      './apps/*/tsconfig.json',
      './packages/config/*/tsconfig.json',
    ],
  },
};

module.exports = config;
