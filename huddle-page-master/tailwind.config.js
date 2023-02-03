/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      poppins: 'Poppins',
      openSans: 'Open Sans',
    },
    
      
    colors: {
      pink: "hsl(322, 100%, 66%)",
      lightPink: "hsl(321, 100%, 78%)",
      ligthRed: "hsl(0, 100%, 63%)",
      white: "#fff",
      black: "#000",
      gray: "#555",
      darkCyan: "hsl(192, 100%, 9%)",
      paleBlue:"hsl(207, 100%, 98%)",
    },
    container: {
      center: 'true',
    },
    extend: {},
  },
  plugins: [],
}
