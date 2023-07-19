/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig */
/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig | SortImportsConfig} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  importOrder: [
    '^react',
    '<TYPES>',
    '<TYPES>^[./]',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@noodle/(.*)$',
    '',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.4',
};

module.exports = config;
