// const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {},
      colors: {},
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(neutral|brand|yellow|blue|red|orange|green)-[0-9]+/,
    },
  ],
};