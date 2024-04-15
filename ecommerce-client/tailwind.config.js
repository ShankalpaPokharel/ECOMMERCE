const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
        'lato': ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}