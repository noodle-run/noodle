import { defaultExclude } from 'vitest/config';

import { mergeConfig, reactConfig } from '@noodle/vitest';

export default mergeConfig(reactConfig, {
  test: {
    setupFiles: ['@noodle/test-utils/setup'],
    exclude: [...defaultExclude, '**/e2e/**/*'],
    coverage: {
      exclude: [...defaultExclude, '**/utils/**/*'],
    },
  },
});
