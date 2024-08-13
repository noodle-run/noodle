import path from 'path';
import { fileURLToPath } from 'url';

import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';
import * as regexpPlugin from 'eslint-plugin-regexp';
import pluginSecurity from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default tseslint.config(
  {
    ignores: ['.next'],
  },

  // Base configurations
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // Next.js / React
  ...fixupConfigRules(compat.extends('plugin:@next/next/recommended')),
  ...fixupConfigRules(compat.extends('plugin:react/recommended')),
  ...fixupConfigRules(compat.extends('plugin:react-hooks/recommended')),
  ...fixupConfigRules(compat.extends('plugin:jsx-a11y/strict')),

  // Tailwind CSS
  ...fixupConfigRules(compat.extends('plugin:tailwindcss/recommended')),

  // Other plugins
  comments.recommended,
  regexpPlugin.configs['flat/recommended'],
  pluginSecurity.configs.recommended,
  eslintConfigPrettier,

  // JSDoc plugin only for TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    extends: [jsdoc.configs['flat/recommended-typescript-error']],
  },

  // Settings and rule overrides
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'cn', 'cva'],
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],

      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],

      '@typescript-eslint/non-nullable-type-assertion-style': 'off',

      '@typescript-eslint/dot-notation': 'off',

      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: true,
        },
      ],

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // security
      'security/detect-non-literal-fs-filename': 'off',

      // we're not building a library here
      'jsdoc/require-jsdoc': 'off',
    },
  },
);
