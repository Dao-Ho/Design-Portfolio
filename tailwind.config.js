/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        transaction: "url('/transactionbackdrop.png')",
      },
      fontFamily: {
        bebas: ['var(--font-bebas)'],
        libre: ['var(--font-libre)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
