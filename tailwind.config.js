/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{html,ts}",
  ],
theme: {
  extend: {
    colors:{
      "black-1":"#25282B",
      "blue-1":"#57B2D6",
      "blue-2":"#00478A",
      "blue-3":"#0F3963",
      "grey-1":"#848084",
      "grey-2":"#6F6F6F",
      "white-1":"#F2F3F3",
      "white-2":"#F6F6F6",
      "white-3":"#FAF9F7",

    },
  },
  fontFamily: {
    Anuphan: ['Anuphan'],
    Poppins:['Poppins'],
    urbanist:['Urbanist'],
    ibm:['IBM Plex Sans Thai']
  },
  screens: {
    sm: "640px",
    md: "769px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  }
},
plugins: [],
}

