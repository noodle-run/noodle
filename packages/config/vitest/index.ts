import type { UserConfigExport } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { mergeConfig as _mergeConfig, defineConfig } from 'vitest/config';

export const mergeConfig = (base: UserConfigExport, config: UserConfigExport) =>
  _mergeConfig(base, config);

export const baseConfig = defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      reporter: ['html', 'text', 'json'],
    },
  },
});

export const reactConfig = mergeConfig(baseConfig, {
  plugins: [react()],
  test: {
    environment: 'happy-dom',
  },
});
