/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'tan-meringue': ['Tan Meringue', 'sans-serif'],
        'safira-march': ['Safira March', 'sans-serif'],
      },
    },
  },
  plugins: [],
}