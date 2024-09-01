/**
 * Since ESLint and many plugins are written in JavaScript, we need to provide
 * or change some types to make them work with TypeScript.
 */

// From: https://github.com/t3-oss/create-t3-turbo/blob/main/tooling/eslint/types.d.ts
declare module '@eslint/js' {
  import type { Linter } from 'eslint';

  export const configs: {
    readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
    readonly all: { readonly rules: Readonly<Linter.RulesRecord> };
  };
}

declare module '@eslint-community/eslint-plugin-eslint-comments/configs' {
  import type { Linter } from 'eslint';

  export const recommended: {
    rules: Linter.RulesRecord;
  };
}

declare module '@eslint/eslintrc' {
  import type { Linter } from 'eslint';

  export class FlatCompat {
    constructor({
      baseDirectory,
      resolvePluginsRelativeTo,
    }: {
      baseDirectory: string;
      resolvePluginsRelativeTo: string;
    });

    extends(extendsValue: string): Linter.Config & {
      [Symbol.iterator]: () => IterableIterator<Linter.Config>;
    };
  }
}

declare module '@eslint/compat' {
  import type { Linter } from 'eslint';
  import type { ConfigWithExtends } from 'typescript-eslint';

  export const fixupConfigRules: (
    config: string | Linter.Config,
  ) => ConfigWithExtends[];
}

declare module 'eslint-plugin-regexp' {
  import type { Linter } from 'eslint';
  import type { ConfigWithExtends } from 'typescript-eslint';

  export const configs: {
    'flat/recommended': {
      [Symbol.iterator]: () => IterableIterator<ConfigWithExtends>;
      rules: Linter.RulesRecord;
    };
    'flat/all': {
      [Symbol.iterator]: () => IterableIterator<ConfigWithExtends>;
      rules: Linter.RulesRecord;
    };
  };
}

declare module 'eslint-plugin-security' {
  import type { Linter } from 'eslint';
  import type { ConfigWithExtends } from 'typescript-eslint';

  export const configs: {
    recommended: {
      [Symbol.iterator]: () => IterableIterator<ConfigWithExtends>;
      rules: Linter.RulesRecord;
    };
  };
}
