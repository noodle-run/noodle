import { type Config } from 'tailwindcss';

import noodlePreset from '@noodle/tailwind';

const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  presets: [noodlePreset],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateAreas: {
        featuresWide: [
          `leftTop    leftTop    centerTop  centerTop    centerTop    right right`,
          `leftBottom leftBottom leftBottom centerBottom centerBottom right right`,
        ],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
