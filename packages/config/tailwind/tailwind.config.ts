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
    extend: {},
  },
  plugins: [
    require('windy-radix-palette'),
    require('@tailwindcss/typography'),
    require('windy-radix-typography'),
    require('tailwindcss-animate'),
  ],
} satisfies Config;

export default config;
