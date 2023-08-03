/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kotoriRose: ["KotoriRose", "sans-serif"],
        kotoriRoseB: ["KotoriRoseBold", "sans-serif"],
        emeralde: ["Emeralde", "sans-serif"]
      },
      backgroundImage: {
        "coffeeBean": "url('./assets/images/CoffeeBeanBackground.jpg')",
      },
      colors: {
        "tan": "#e5cb91",
        "brown": "#3c2f2a",
      },
      boxShadow: {
        'bottom': '0 2px 10px 0 rgba(0, 0, 0, 0.1)',
      },
      display: ["group-hover"],
      screens: {
        'xs': '0px'
      },
    },
  },
  plugins: [],
}