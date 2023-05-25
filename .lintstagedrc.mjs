export default {
  '*.{js,jsx,ts,tsx}': [
    'eslint --max-warnings 0 --report-unused-disable-directives',
    'prettier --list-different',
  ],
  '*.{css,html,json,md,mdx,yaml,yml}': ['prettier --list-different'],
};
