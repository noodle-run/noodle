import { baseConfig, mergeConfig } from '@noodle/vitest';

export default mergeConfig(baseConfig, {
  test: {
    environment: 'node',
  },
});
