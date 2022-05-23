module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'react/jsx-max-depth': [2, { max: 4 }],
  },
};
