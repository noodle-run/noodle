import { mergeConfig, reactConfig } from '@noodle/vitest';

export default mergeConfig(reactConfig, {
  test: {
    setupFiles: ['@noodle/test-utils/setup'],
  },
});
