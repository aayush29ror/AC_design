/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#0a0a0a',
        },
        brand: {
          cyan: '#00e5ff',
          purple: '#6b0099',
          red: '#ff0033',
        },
        gradient: {
          start: '#00e5ff',
          end: '#6b0099',
        },
      },
    },
  },
  plugins: [],
}