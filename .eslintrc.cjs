/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ['noodle/base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true,
  },
};

module.exports = config;
