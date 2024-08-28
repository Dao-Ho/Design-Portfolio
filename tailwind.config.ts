/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      'light-foreground': '#262523',
      'light-background': '#fff7f0',
      'dark-foreground': '#fff7f0',
      'dark-background': '#272624',
      'background': 'var(--background-color)',
      'foreground': 'var(--foreground-color)',

    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        bebas: 'var(--font-bebas)',
        roboto: 'var(--font-roboto)',
        libre: 'var(--font-libre)',
        robotoCondensed: 'var(--font-roboto-condensed)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--background-color': theme('colors.light-background'),
          '--foreground-color': theme('colors.light-foreground'),
        },
        '.dark': {
          '--background-color': theme('colors.dark-background'),
          '--foreground-color': theme('colors.dark-foreground'),
        },
      });
    },
  ],
});