const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        dark: '#161616',
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
