module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:vue/essential'],
  rules: {
    'import/extensions': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    indent: ['error', 2],
  },
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
}
