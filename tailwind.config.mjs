const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend Deca', ...fontFamily.sans],
      },
      colors: {
        light: '#f5f5f5',
        dark: '#161616',
        accent: '#0f4c81',
        black: '#1c1d1f',
        secondary: '#f3f3f4',
        secondaryHover: '#eeeeef',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#161616',
            'h1, h2, h3, h4, h5, h6': {
              color: '#161616',
            },
            'ol > li::marker': {
              color: '#161616',
            },
            'ul > li::marker': {
              color: '#161616',
            },
            blockquote: {
              borderLeftColor: '#161616',
            },
            pre: {
              backgroundColor: '#000000',
            },
          },
        },
        invert: {
          css: {
            'ol > li::marker': {
              color: '#ffffff',
            },
            'ul > li::marker': {
              color: '#ffffff',
            },
            blockquote: {
              borderLeftColor: '#ffffff',
            },
            pre: {
              backgroundColor: '#000000',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
