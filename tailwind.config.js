/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bokor: ['Bokor', 'sans-serif'],
        anton: ['Anton SC', 'sans-serif']
      },
    },
  },
  plugins: [],
}
