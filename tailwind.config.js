/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
          'heroBG':'linear-gradient(160.65deg, #474747 4.14%, #222222 44.22%)',
          'heroBG2':'linear-gradient(97.65deg, #60BBEE 0.33%, #0A72AD 93.35%)',
          'heroBG3':'linear-gradient(97.73deg, #399FD8 -6.96%, #0775B4 23.5%, #003756 92.79%)',
          'heroBG4':'linear-gradient(to right, #60BBEE, #2387C0)',
          'heroBG5':'linear-gradient(to right, #474747 0%, #222222 42%)',
          'footerBG':'linear-gradient(to right, #474747 0%, #222222 42%)',
          'hover-heroBG2':'linear-gradient(97.65deg, #3D9DD3 0.33%, #3D9DD3 93.35%)'

      },
      colors:{
        'light-gray':'#C4C4C4',
        
      }
    },
  },
  plugins: [],
}

