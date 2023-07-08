import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { mergeConfig as _mergeConfig, defineConfig } from 'vitest/config';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const mergeConfig = (
  base: Record<string, any>,
  config: Record<string, any>,
) => _mergeConfig(base, config);
/* eslint-enable @typescript-eslint/no-explicit-any */

export const baseConfig = defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      reporter: ['html', 'text', 'json'],
      // TOOD: enable once next-auth mocking is implemented
      // functions: 80,
      // lines: 80,
      // statements: 80,
      // branches: 80,
    },
  },
});

export const reactConfig = mergeConfig(baseConfig, {
  plugins: [react()],
  test: {
    environment: 'happy-dom',
  },
});
