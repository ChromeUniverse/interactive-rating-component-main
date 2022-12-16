/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Primary
      orange: "hsl(25, 97%, 53%)",
      // Neutral
      white: "hsl(0, 0%, 100%)",
      "light-grey": "hsl(217, 12%, 63%)",
      "medium-grey": "hsl(216, 12%, 54%)",
      "dark-blue": "hsl(213, 19%, 18%)",
      "very-dark-blue": "hsl(216, 12%, 8%)",
      "card-bg": "#171e28ff",
    },
    extend: {
      fontFamily: {
        sans: "Overpass",
      },
    },
  },
  plugins: [],
};
