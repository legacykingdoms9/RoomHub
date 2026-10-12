/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f7f5',
          800: '#163d2e',
          900: '#064e3b', // Primary Brand Color
        },
        cream: {
          50: '#fdfbf7', // Background
          100: '#f7f3eb',
        },
        gold: {
          500: '#b59d5c', // Muted Accent
        }
      },
    },
  },
  plugins: [],
};