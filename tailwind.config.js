/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
