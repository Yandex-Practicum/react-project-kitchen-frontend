module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.jsx', '*.js'],
    },
  ],
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'no-param-reassign': 'warn',
    'consistent-return': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'default-param-last': 'warn',
    'prefer-destructuring': 'warn',

    // React
    'react/require-default-props': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/prop-types': 'warn',
    'react/no-multi-comp': [ 'error', { 'ignoreStateless': true }],
    'react/no-set-state': 'warn',
    'react/no-string-refs': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/sort-prop-types': 'warn',
    'react/function-component-definition': 'warn',

    // JSX
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-filename-extension': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/jsx-indent-props': [ 'error', 2 ],
    'react/jsx-indent': [ 'error', 2 ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [ 'error', { 'maximum': 3 }],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-literals': 'warn',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'warn',
    'react/jsx-space-before-closing': 'error'

  },
}
