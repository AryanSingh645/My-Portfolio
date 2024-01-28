/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'xs': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',    },
    extend: {},
    animation:{
    'water': 'water 3s ease-in-out infinite'
    }
  },
  plugins: [],
}

