/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "main-neon-blue" : "#11FFEE",
        "main-neon-pink" : "#FEABDA",
      },
    },
  },
  plugins: [],
}
