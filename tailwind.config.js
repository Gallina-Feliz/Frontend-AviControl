/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '	#FFFF00',
        accent: '#e74c3c',
        background: '#ecf0f1',
      },
    },
  },
  plugins: [],
}