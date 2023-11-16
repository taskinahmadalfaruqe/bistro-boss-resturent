/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '1rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },

    backgroundImage:{
      'buttonBG':'linear-gradient(90deg,#835D23 0%, #B58130  100%)',
      'hoverButtonBG':'linear-gradient(90deg,#B58130 0%, #835D23  100%)',

   },
  //  : {
  //   'custom-gradient': 'linear-gradient(90deg, var(--custom-start) 0%, var(--custom-end) 100%)',
  // },


    extend: {},
  },
  plugins: [require("daisyui")],
}

