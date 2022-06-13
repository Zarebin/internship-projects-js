module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  // to solve Error of " cannot resolve import file "
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  ignorePatterns: ['*.svg', '*.scss', '*.css', '*.eot', '*.ttf', '*.woff', '*.woff2', '*.txt'],
  rules: {

    // to solve Error of  " Assignment to property of function parameter 'state' ""
    'no-param-reassign': [2, { props: false }],

    // to solve Error of " 'AnswerType' is already declared in the upper scope on line 9 column 6  no-shadow "
    // https://github.com/typescript-eslint/typescript-eslint/issues/2621#issuecomment-701970389
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    // https://stackoverflow.com/a/65768375
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],


    'react/function-component-definition':
      'function-declaration' | 'function-expression' | 'arrow-function',

    // to solve Error of " error  JSX not allowed in files with extension '.tsx'" "
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],

    // to solve Error of linebreak-style difference in windows and unix.
    'linebreak-style': ['error', 'windows'],

    // to solve Error of  "  Missing file extension "ts" for [some file import without file extension "
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
};
