/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary: "#03030B",
      secondary: "#0f1032",
      text: "#708090",
      textSelected: "#5348A9",
      white: "#FFFFFF",
      button: "#5348A9",
      success: "#228C22",
      danger: "#BB2124",
      gold: "#FFD700"
    },
    extend: {},
  },
  plugins: [],
}