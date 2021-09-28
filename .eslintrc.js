module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:vue/essential'],
  rules: {
    'import/extensions': 'off',
    'prettier/prettier': 'off',
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'off', // 禁止未使用过的表达式 可以使用短路写法
    'no-console': 'off',
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
