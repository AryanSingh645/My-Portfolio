/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'xxxs': '280px',
      'xxs': '380px',
      'xs': {'min': '582px', 'max': '780px'},
      'sm': '780px',
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

