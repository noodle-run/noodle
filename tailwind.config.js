/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
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
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'media',
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@headlessui/tailwindcss'),
  ],
};
