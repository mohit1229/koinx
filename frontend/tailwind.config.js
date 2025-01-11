/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'maingrey':'#EFF2F5',
        'cardBorder':'#DEE1E6',
      }
    },
    
  },
  plugins: [],
}