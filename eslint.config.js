import eslintPluginAstro from 'eslint-plugin-astro'
import pluginImport from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      import: pluginImport,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
        },
      ],
    },
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
]
