/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {  
    colors: {
      'beige': '#cfcaac',
      'darkgreen': '#555843',
      'darkergreen': '#071104',
      'lightgreen': '#A7D397',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray': '#D0D4CA',
    },

    extend: {
    },
  },
  plugins: [],
}
