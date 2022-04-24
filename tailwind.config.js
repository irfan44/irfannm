const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#000',
            'h1, h2, h3, h4, h5, h6': {
              color: '#000',
            },
            'ol > li::marker': {
              color: '#000',
            },
            'ul > li::marker': {
              color: '#000',
            },
            blockquote: {
              borderLeftColor: '#000',
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
              backgroundColor: '#18181b',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
