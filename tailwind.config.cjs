/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero_xl: "url('/Shopping during Covid - 1200x900.png')",
        hero_lg: "url('/Shopping during Covid - 900x675.png')",
      },
    },
  },
  plugins: [],
};
