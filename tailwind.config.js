const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
