/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-green1": 'var(--main-green1)',
        "main-green2": 'var(--main-green2)',
      },
      screens:{
        "small" : '450px'
      }
    },
  },
  plugins: [require("daisyui")],
}

