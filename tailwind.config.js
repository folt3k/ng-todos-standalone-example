/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#178d4d',
        "primary-lighter": "#3ca96a"
      }
    },
  },
  plugins: [],
}
