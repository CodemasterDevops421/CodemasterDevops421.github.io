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
        brand: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#b6e4ff',
          300: '#84d0ff',
          400: '#4bb7ff',
          500: '#1f9fff',
          600: '#0f7edb',
          700: '#0c62ab',
          800: '#0e528b',
          900: '#113f67'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(31,159,255,0.35)'
      }
    },
  },
  plugins: [],
}