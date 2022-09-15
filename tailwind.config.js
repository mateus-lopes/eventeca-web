/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#288D85',
        'secondary': '#191919',
      },
      container: {
        center: true,
      },
      borderRadius: {
        'base': '15px',
      },
    },
  },
  plugins: [],
}