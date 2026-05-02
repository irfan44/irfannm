import typography from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

const { fontFamily } = defaultTheme;

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend Deca Variable", ...fontFamily.sans],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: "var(--color-foreground)",
            "h1, h2, h3, h4, h5, h6": {
              color: "var(--color-foreground)",
            },
            "ol > li::marker": {
              color: "var(--color-foreground)",
            },
            "ul > li::marker": {
              color: "var(--color-foreground)",
            },
            blockquote: {
              borderLeftColor: "var(--color-foreground)",
            },
            pre: {
              backgroundColor: "#000000",
            },
          },
        },
        invert: {
          css: {
            "ol > li::marker": {
              color: "var(--color-white)",
            },
            "ul > li::marker": {
              color: "var(--color-white)",
            },
            blockquote: {
              borderLeftColor: "var(--color-white)",
            },
            pre: {
              backgroundColor: "#000000",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
