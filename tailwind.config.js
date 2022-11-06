/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'gray-fade': '#EAECF0',
        'gray-bold': '#D0D5DD',
        'white-teal': '#FFFFFF',
      },
      screens: {
        'fold': '320px',
        // => @media (min-width: 32opx) { ... }
  
        'mobile': '375px',
        // => @media (min-width: 375px) { ... }
  
        'tab': '425px',
        // => @media (min-width: 425px) { ... }
      },
    },
  },
  plugins: [],
}
