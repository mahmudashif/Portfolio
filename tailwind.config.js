/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        "container": "1196px",
      },
      colors:{
        "primary" : "#6785A1"
      },
      fontFamily:{
        'imbue' : "Imbue",
      }
    },
  },
  plugins: [],
}