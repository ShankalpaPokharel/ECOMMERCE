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
        "sub-text":"#9196AA"
           
      },
      screens: {
        /* we should start with mobile. */
        sm: "576px", // mobile landscape mode
        md: "768px", // tablet
        lg: "1024px", // latptop without side numerical in keypad
        xl: "1280px", // normal desktop
        xxl: "1400px", // huge monitor
      },
    },
  },
  plugins: [],
}