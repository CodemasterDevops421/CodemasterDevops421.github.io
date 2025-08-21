/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#0a192f'
      },
      boxShadow: {
        glow: '0 0 40px rgba(6,182,212,0.35)'
      }
    },
  },
  plugins: [],
}