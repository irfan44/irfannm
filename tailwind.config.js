const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#000",
            "h1, h2, h3, h4, h5, h6": {
              color: "#000",
            },
            "ol > li::marker": {
              color: "#000",
            },
            "ul > li::marker": {
              color: "#000",
            },
            blockquote: {
              borderLeftColor: "#000",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
