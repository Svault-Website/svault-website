/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens:
      {
        'iphone': {'min': '360px', 'max': '460px'},
        'tablet': {'min': '461px', 'max': '820px'},
        'medium': {'min': '821px', 'max': '1222px'}
      },
      fontFamily:{
        'orb': ['Orbitron', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

