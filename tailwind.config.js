/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    /* colors: {
      color_primary: '#484848',
      color_secondary: '#1F44B9',
      // ...
    }, */
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1836px',
    },

    extend: {},
  },
  plugins: [],
}

