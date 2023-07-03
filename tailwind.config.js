/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui' ]
      },
      colors: {
        'per-grey': 'hsl(231, 7%, 60%)',
        'per-charcol': 'hsl(235, 18%, 26%)',
        'per-dark-grey': 'hsl(234, 29%, 20%)',
        'per-tomato': 'hsl(4, 100%, 67%)'
      },
    },
  },
  plugins: [],
}

