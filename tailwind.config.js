/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        "purple" : "#5D50C6",
        "pink" : "#F85E9F",
        "orange" : "#FF5722",
        "grey" : "#191825",
      }
    },
  },
  plugins: [],
}

