/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Fira sans, sans-serif'
      },
      colors:{
        primary: '#F44A25',
        dark: '#333333',
        border: '#BDBDBD',
        "border-select": '#4F4F4F'
      },
      gridTemplateColumns:{
        'cards': 'repeat(3, 290px)',
        'cards-md': '290px'
      }
    },
  },
  plugins: [],
}
