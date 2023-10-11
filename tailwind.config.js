/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  variants: {
    extend: {
      fontBold: ['group-hover'],
  },
},
  theme: {
   
    extend: {
     colors:{
        'cremey': '#d9cca8',
        'cremey-light': '#eae5da',
        'val-red':'#da292a',
     }
    },
  },
  plugins: [],
}
