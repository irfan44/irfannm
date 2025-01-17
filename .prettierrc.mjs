/**
 * @type {import('prettier').Options}
 */
export default {
  plugins: [
    'prettier-plugin-astro',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  printWidth: 100,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  overrides: [
    {
      files: ['**/*.astro'],
      options: { parser: 'astro' },
    },
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '^astro$',
    '^@astrojs',
    '^astro(.+)$',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@components',
    '^@libs',
    '^@layouts',
    '',
    '^[./]', // all relative imports
    '',
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '^@assets',
    '^@styles',
  ],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
}
