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
        "old-gen-green" : "#48f9c6",
        "old-gen-yellow" : "#FAFF18",
        "old-gen-cyan" : "#027B8F",
        "old-gen-red" : "#B81011",
      },
      backgroundImage: {
        "neon-blinking-bg" : "repeating-linear-gradient(to bottom,transparent 7px,rgba(0, 0, 0, 0.8) 9px,rgba(0, 0, 0, 0.8) 13px, transparent 13px)",
      },
      screens: {
        "xs" : "400px"
      },
    },
  },
  plugins: [],
}
