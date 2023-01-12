/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey':{
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#424242'
        }
    
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      },
      }
    },
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#3F51B5",
        "secondary": "#E0E0E0",
        "accent": "#C149AD",
        "neutral": "#000000",
        "base-100": "#FFFFFF",
        "info": "#039BE5",
        "success": "#4CAF50",
        "warning": "#FFC107",
        "error": "#F44336",
        },
      },
    ],
    },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
