/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Cinzel": ['Cinzel', 'serif'],
      "Inter": ['Inter', 'sans-serif']
    },

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

    backgroundImage: {
      'buttonBG': 'linear-gradient(90deg,#835D23 0%, #B58130  100%)',
      'hoverButtonBG': 'linear-gradient(90deg,#B58130 0%, #835D23  100%)',

    },


    extend: {
      colors: {
        'BlackColor': '#151515',
        'WhiteColor': '#fff',
        'YellowColor': '#EEFF25',
        'PrimaryColor': '#D1A054',
        'HeddingColor': '#D99904',
        'LightBlackColor': '#1F2937',
        'DeepBlackColor': '#111827',
      },
    },
  },
  plugins: [require("daisyui")],
}

