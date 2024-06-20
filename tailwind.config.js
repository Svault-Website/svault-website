/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens:
      {
        'iphone': {'min': '360px', 'max': '460px'},
        'tablet': {'min': '461px', 'max': '815px'},
        'medium': {'min': '816px', 'max': '1222px'}
      }
    },
  },
  plugins: [],
}

