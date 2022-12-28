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
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        },
      },
      borderRadius: {
        'base': '15px',
      },
      screens: {
        '2xs': '300px',
        'base': '1180px',
      },
      maxHeight: {
        '112': '28rem',
        '128': '32rem',
      }
    },
  },
}