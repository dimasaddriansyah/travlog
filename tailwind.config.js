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
        "grey" : "#191825"
      },
      dropShadow:{
        "shadow-sm" : [
          "0px 548px 219px rgba(0, 0, 0, 0.01)",
          "0px 308px 185px rgba(0, 0, 0, 0.04)",
          "0px 137px 137px rgba(0, 0, 0, 0.06)",
          "0px 34px 75px rgba(0, 0, 0, 0.07)",
          "0px 0px 0px rgba(0, 0, 0, 0.07)"
        ],
        "shadow-lg": [
          "0px 81px 32px rgba(0, 0, 0, 0.01)",
          "0px 45px 27px rgba(0, 0, 0, 0.05)",
          "0px 20px 20px rgba(0, 0, 0, 0.09)",
          "0px 5px 11px rgba(0, 0, 0, 0.1)",
          "0px 0px 0px rgba(0, 0, 0, 0.1)"
        ],
        "shadow-xl": [
          "0px 41px 89px rgba(0, 0, 0, 0.1)",
          "0px 0px 0px rgba(0, 0, 0, 0.1)"
        ],
      },
      boxShadow:{
        "shadow-xl": [
          "0px 0px 0px 0px rgba(0, 0, 0, 0.05)",
           "0px 32px 71px 0px rgba(0, 0, 0, 0.05)",
           "0px 128px 128px 0px rgba(0, 0, 0, 0.04)", 
           "0px 288px 173px 0px rgba(0, 0, 0, 0.03)", 
           "0px 513px 205px 0px rgba(0, 0, 0, 0.01)", 
           "0px 801px 224px 0px rgba(0, 0, 0, 0.00)"
         ],
      },
    },
  },
  plugins: [],
}

