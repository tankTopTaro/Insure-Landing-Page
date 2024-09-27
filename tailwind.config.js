import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-violet': 'var(--primary-dark-violet)',
        'grayish-blue': 'var(--primary-grayish-blue)',
        'very-dark-violet': 'var(--neutral-very-dark-violet)',
        'dark-grayish-violet': 'var(--neutral-dark-grayish-violet)',
        'very-light-gray': 'var(--neutral-very-light-gray)',
        'white': 'var(--background-white)'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
