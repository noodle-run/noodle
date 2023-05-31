import { type Config } from 'tailwindcss';

import noodlePreset from '@noodle/tailwind';

const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    '../**/src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  presets: [noodlePreset],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
