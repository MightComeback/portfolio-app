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
      backgroundImage: {
        "neon-blinking-bg" : "repeating-linear-gradient(to bottom,transparent 7px,rgba(0, 0, 0, 0.8) 9px,rgba(0, 0, 0, 0.8) 13px, transparent 13px)",
      },
      screens: {
        "xs" : "400px",
      },
    },
  },
  plugins: [],
}
