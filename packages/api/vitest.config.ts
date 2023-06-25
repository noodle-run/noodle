import { defaultExclude } from 'vitest/config';

import { baseConfig, mergeConfig } from '@noodle/vitest';

export default mergeConfig(baseConfig, {
  test: {
    environment: 'node',
    coverage: {
      exclude: [...defaultExclude, '**/setup/**/*'],
    },
  },
});
