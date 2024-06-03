/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#FFBE2E',
        'deep-blue': '#525AA0',
        'zwilt-black': '#202229',
        
      }
    },
  },
  plugins: [],
}