import type { Config } from 'tailwindcss';

import aspectRatioPlugin from '@tailwindcss/aspect-ratio';
import containerQueriesPlugin from '@tailwindcss/container-queries';
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import tailwindAnimate from 'tailwindcss-animate';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
      current: 'currentColor',

      background: 'var(--gray-1)',
      foreground: 'var(--gray-12)',
      'foreground-muted': 'var(--gray-11)',
      border: 'var(--gray-6)',

      gray: {
        DEFAULT: 'var(--gray-9)',

        1: 'var(--gray-1)',
        2: 'var(--gray-2)',
        3: 'var(--gray-3)',
        4: 'var(--gray-4)',
        5: 'var(--gray-5)',
        6: 'var(--gray-6)',
        7: 'var(--gray-7)',
        8: 'var(--gray-8)',
        9: 'var(--gray-9)',
        10: 'var(--gray-10)',
        11: 'var(--gray-11)',
        12: 'var(--gray-12)',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [
    typographyPlugin,
    formsPlugin,
    aspectRatioPlugin,
    {
      handler: containerQueriesPlugin.handler,
      config: containerQueriesPlugin.config ?? {},
    },
    tailwindAnimate,
  ],
};
export default config;
