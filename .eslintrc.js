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
  rules: {
    'no-console': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    'linebreak-style': ['error', 'windows'], // 修正選取行尾順序錯誤 ( windows / unix )
    'multiline-ternary': ['error', 'always'], // 強制三元換行
  },
};
