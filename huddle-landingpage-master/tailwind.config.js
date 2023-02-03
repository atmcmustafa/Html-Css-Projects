/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center:"true",
    },
    fontFamily: {
      poppins: 'Poppins',
      sans: 'Open Sans',
    },
    colors: {
      primary: "hsl(257, 40%, 49%)",
      soft: "hsl(300, 69%, 71%)",
      white: "#fff",
      black: "#000",
      gray: "#333",
    },
    extend: {},
  },
  plugins: [],
}
