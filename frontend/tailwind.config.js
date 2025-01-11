// tailwind.config.js
import scrollbarPlugin from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maingrey': '#EFF2F5',
        'cardBorder': '#DEE1E6',
        'rank': '#768396',
        'priceBg': '#EBF9F4',
        'priceText': '#14B079',
        'lightGreen':'#E8F4FD',
        'signUp':'#1F67FF'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    scrollbarPlugin, // Use the plugin properly
  ],
};
