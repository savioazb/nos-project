/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black':'#0d0d0d',
      'white': '#fff',

      'cyan': '#642424',
      'gray': '#272626'
    },
    extend: {},
  },
  plugins: [],
}
