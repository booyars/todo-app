/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#AEE5D1",
        darkGreen: "#415380",
      },
      fontFamily: {
        'greatvibes': ['Great Vibes', 'sans-serif'],
        'philosopher': ['Philosopher', 'sans-serif'],
        'karla': ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}