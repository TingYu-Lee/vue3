module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    'linebreak-style': ['error', 'windows'], // 修正選取行尾順序錯誤 ( windows / unix, CRLF / LF )
    'multiline-ternary': ['error', 'always-multiline'],
    'vue/no-multiple-template-root': ['warn'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': ['off'],
    'no-plusplus': ['off'],
    'max-len': ['off', { code: 120 }],
  },
};
