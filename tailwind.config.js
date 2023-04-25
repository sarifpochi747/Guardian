/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{html,ts}",
  ],
theme: {
  extend: {
    colors:{
      'white-1':"#FAF9F7",
      "red-1":"#A61F23",
      "grey-1":"#282828",
      "grey-2":"#636363",
      "grey-3":"#52575C",
      "grey-4":"#707070",
      "grey-5":"#626262",
      "grey-6":"#F0F0F0",
      "black-1":"#25282B",
    },
  },
  fontFamily: {
    Anuphan: ['Anuphan'],
    Poppins:['Poppins']
  },
},
plugins: [],
}

