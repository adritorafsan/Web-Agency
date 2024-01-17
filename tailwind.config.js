/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'maincolor': '#010851',
        'background': '#9A7AF1'
      }
    },
  },
  plugins: [],
}

