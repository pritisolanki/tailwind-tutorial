module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body: ['Dosis']
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0},
          "100%": { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}