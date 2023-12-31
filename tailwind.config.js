
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amantic:['Amatic SC', 'sans-serif'],
        leo: ['Libre Baskerville', 'serif']
      },
    },
  },
  plugins: [],
}