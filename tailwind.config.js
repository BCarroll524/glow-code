/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      inter: ["InterTight", "sans-serif"],
      nicky: ["Nicky", "sans-serif"],
    },
    extend: {
      colors: {
        "light-blue": "#DDF0F6",
        "dark-blue": "#7ca5b8",
        "light-pink": "hsl(0 94% 82%)",
      },
    },
  },
  plugins: [],
};
