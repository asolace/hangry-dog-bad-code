/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta:"PlusJakartaSans",
      },


      screens:{
      '2xl':'1900px'
      },
      boxShadow: {
        'custom': 'rgba(254, 118, 119, 0.45) 0px 6px 40px',
      },
    },
  },
  plugins: [],
};


