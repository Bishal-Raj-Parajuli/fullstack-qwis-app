/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3FEE9D',
        secondary: '#3FE8EE'
        // secondary: '#3FEE9D',
        // primary: '#3FE8EE',
      }
    },
  },
  plugins: [],
}