import type { Config } from 'tailwindcss';

import aspectRatioPlugin from '@tailwindcss/aspect-ratio';
import containerQueriesPlugin from '@tailwindcss/container-queries';
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import tailwindAnimate from 'tailwindcss-animate';

type Scale = 'gray' | 'pink' | 'salmon';

const generateColorScale = (scale: Scale) => ({
  DEFAULT: `var(--${scale}-9)`,

  'foreground-muted': `var(--${scale}-11)`,
  foreground: `var(--${scale}-12)`,

  app: `var(--${scale}-1)`,

  subtle: `var(--${scale}-2)`,
  'subtle-border': `var(--${scale}-6)`,

  element: `var(--${scale}-3)`,
  'element-hover': `var(--${scale}-4)`,
  'element-active': `var(--${scale}-5)`,
  'element-border': `var(--${scale}-7)`,
  'element-border-hover': `var(--${scale}-8)`,

  solid: `var(--${scale}-9)`,
  'solid-hover': `var(--${scale}-10)`,
});

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

      gray: generateColorScale('gray'),
      pink: generateColorScale('pink'),
      salmon: generateColorScale('salmon'),
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
