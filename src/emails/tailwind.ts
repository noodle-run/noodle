import type { TailwindConfig } from '@react-email/components';
import { gray, indigo, tomato } from '@radix-ui/colors';

/**
 * This config is used for the emails, hence why it's almost the same as the normal tailwind config, just more verbose.
 */
export const emailTailwindConfig = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      current: 'currentColor',

      background: gray.gray1,
      foreground: gray.gray12,
      'foreground-muted': gray.gray11,
      border: gray.gray4,

      gray: {
        DEFAULT: gray.gray9,
        'foreground-muted': gray.gray11,
        foreground: gray.gray12,

        app: gray.gray1,
        subtle: gray.gray2,
        'subtle-border': gray.gray6,

        element: gray.gray3,
        'element-hover': gray.gray4,
        'element-active': gray.gray5,
        'element-border': gray.gray7,
        'element-border-hover': gray.gray8,

        solid: gray.gray9,
        'solid-hover': gray.gray10,
      },
      pink: {
        DEFAULT: 'hsl(339 99% 66%)',
        'foreground-muted': 'hsl(335 71% 46%)',
        foreground: 'hsl(338 62% 24%)',

        app: 'hsl(340 100% 99%)',

        subtle: 'hsl(351 78% 98%)',
        'subtle-border': 'hsl(345 71% 85%)',

        element: 'hsl(346 100% 96%)',
        'element-hover': 'hsl(346 100% 93%)',
        'element-active': 'hsl(347 85% 90%)',
        'element-border': 'hsl(345 61% 80%)',
        'element-border-hover': 'hsl(345 57% 73%)',

        solid: 'hsl(339 99% 66%)',
        'solid-hover': 'hsl(338 85% 61%)',
      },
      salmon: {
        DEFAULT: 'hsl(1 91% 69%)',
        'foreground-muted': 'hsl(359 57% 53%)',
        foreground: 'hsl(3 36% 25%)',

        app: 'hsl(0 50% 99%)',

        subtle: 'hsl(7 100% 98%)',
        'subtle-border': 'hsl(4 100% 86%)',

        element: 'hsl(5 100 96%)',
        'element-hover': 'hsl(6 100% 92%)',
        'element-active': 'hsl(5 100% 88%)',
        'element-border': 'hsl(4 79% 80%)',
        'element-border-hover': 'hsl(3 70% 73%)',

        solid: 'hsl(1 91% 69%)',
        'solid-hover': 'hsl(0 79% 65%)',
      },
      indigo: {
        DEFAULT: indigo.indigo9,
        'foreground-muted': indigo.indigo11,
        foreground: indigo.indigo12,

        app: indigo.indigo1,
        subtle: indigo.indigo2,
        'subtle-border': indigo.indigo6,

        element: indigo.indigo3,
        'element-hover': indigo.indigo4,
        'element-active': indigo.indigo5,
        'element-border': indigo.indigo7,
        'element-border-hover': indigo.indigo8,

        solid: indigo.indigo9,
        'solid-hover': indigo.indigo10,
      },
      red: {
        DEFAULT: tomato.tomato9,
        'foreground-muted': tomato.tomato11,
        foreground: tomato.tomato12,

        app: tomato.tomato1,
        subtle: tomato.tomato2,
        'subtle-border': tomato.tomato6,

        element: tomato.tomato3,
        'element-hover': tomato.tomato4,
        'element-active': tomato.tomato5,
        'element-border': tomato.tomato7,
        'element-border-hover': tomato.tomato8,

        solid: tomato.tomato9,
        'solid-hover': tomato.tomato10,
      },
    },
    fontFamily: {
      sans: ['Geist'],
      mono: ['Geist Mono'],
    },
    fontSize: {
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '4xl': ['36px', { lineHeight: '36px' }],
      '5xl': ['48px', { lineHeight: '1' }],
      '6xl': ['60px', { lineHeight: '1' }],
      '7xl': ['72px', { lineHeight: '1' }],
      '8xl': ['96px', { lineHeight: '1' }],
      '9xl': ['144px', { lineHeight: '1' }],
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
  },
} satisfies TailwindConfig;
