/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#fbf6ec",
        tertiary: "#f0cd71",
        accent: "#004264",
        accentShade: "#155a7e",
        secondaryAccent: "#d3af50",
      },
    },
  },
  plugins: [],
};
