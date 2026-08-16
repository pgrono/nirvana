/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Oswald', 'sans-serif'],
      },
      colors: {
        nv: {
          yellow: '#f5d020',
          amber: '#c9a80f',
          black: '#0a0a0a',
          gray: '#1a1a1a',
        }
      }
    },
  },
  plugins: [],
}
