export default {
  '*.{js,jsx,ts,tsx}': [
    'eslint --max-warnings 0 --report-unused-disable-directives',
    'prettier --check',
  ],
};
