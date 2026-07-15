/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#0D0D0D',
          charcoal: '#1A1A1A',
          gold: '#D4AF37',
          goldHover: '#C59B27',
          silver: '#E5E5E5'
        }
      }
    },
  },
  plugins: [],
}