/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Verdana', 'sans-serif']
      }

    },
    colors: {
      blue: '#1a67d2',
      white: '#ffffff'
    }
  },
  plugins: [],
}
