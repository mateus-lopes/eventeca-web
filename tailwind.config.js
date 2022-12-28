/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#288D85',
      },
      container: {
        padding: {
          DEFAULT: '1.5em',
        },
      },
    },
  },
  plugins: [],
}
