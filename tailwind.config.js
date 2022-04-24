const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
