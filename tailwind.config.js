module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
        blinkAnimation: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        typing: "typing 1.5s steps(20) infinite alternate, blink .7s infinite",
        blink: "blinkAnimation 1s infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
