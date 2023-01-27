/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero_xl: "url('/Shopping during Covid - 1200x900.png')",
        hero_lg: "url('/Shopping during Covid - 900x675.png')",
        hero: "url('/landing page pic.png')",
        dot: "url('/dot-grid.png')",
        dot_red: "url('/dot_red.png')",
        dot_black: "url('/dot_black.png')",
        pattern: "url('/pattern.svg')",
        pattern2: "url('/pattern2.svg')",
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
