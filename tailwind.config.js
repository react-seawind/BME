/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themecolor1: "#DC3558",
        themecolor2: "#1a1963",
        themecolor3: "#30bbff",
      },
      screens: {
        surface: { min: "1200px", max: "1399px" },
      },
    },
  },
  plugins: [],
};
