const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind.config')],
  content: [
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
};
