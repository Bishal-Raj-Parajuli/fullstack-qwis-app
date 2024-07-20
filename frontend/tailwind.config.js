/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#1EF5EA",
        secondary: "#8EECE8",
        accent: "#59BEE3",
        background: "#EDFEFE"
      },
    },
  },
  plugins: [],
}