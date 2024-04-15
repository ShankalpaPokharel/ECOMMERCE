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
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
        
      },
      colors: {
        primary: "#151875",
        "primary-bg" : "#7E33E0",
        "primary-dark": "#0D0E43",
        "primary-light": "#E7E6EF",
        secondary: "#FB2E86",
      },
    },
  },
  plugins: [],
}