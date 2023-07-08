import { type Config } from 'tailwindcss';

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: {
          50: '#ff93ad',
          100: '#ff89a3',
          200: '#ff7f99',
          300: '#ff758f',
          400: '#ff6b85',
          500: '#fa617b',
          600: '#f05771',
          700: '#e64d67',
          800: '#dc435d',
          900: '#d23953',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-radix-colors'),
    require('tailwindcss-animate'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
} satisfies Config;

export default config;
