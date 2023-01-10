/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#3F51B5",
        "secondary": "#eab308",
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
