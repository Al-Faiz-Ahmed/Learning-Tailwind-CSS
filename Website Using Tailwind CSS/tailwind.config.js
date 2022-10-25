/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'display': ['"Montserrat"', 'sans-serif'],
        'inter':['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
