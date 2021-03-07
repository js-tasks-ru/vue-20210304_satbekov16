module.exports = {
  root: true,

  ignorePatterns: ['**/*.esm.js', '**/*.browser.js', '**/vendor/*.js'],

  env: {
    browser: true,
    node: true,
    es2020: true,
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],

  parserOptions: {
    parser: '@babel/eslint-parser',
  },

  rules: {
    'no-unused-vars': process.env.TASK_DEV ? 'off' : 'error',
    'vue/no-unused-components': process.env.TASK_DEV ? 'off' : 'error',
    'vue/valid-template-root': process.env.TASK_DEV ? 'off' : 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',
    'vue/this-in-template': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/v-on-function-call': 'error',
    'vue/attributes-order': 'warn',
    'vue/order-in-components': 'warn',
    'vue/new-line-between-multi-line-property': 'warn',
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
