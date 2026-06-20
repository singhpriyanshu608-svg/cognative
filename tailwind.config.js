/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#071D2B',
          800: '#0a2539',
          700: '#0d2d47',
          600: '#103556',
          500: '#143d64',
        },
        gold: {
          400: '#e8c547',
          500: '#D4AF37',
          600: '#b8962e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
