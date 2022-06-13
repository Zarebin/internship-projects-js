module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    // Unable to resolve path to module -> for path of import file
    // https://stackoverflow.com/a/56696478
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ['*.svg', '*.scss', '*.css'],
  rules: {
    // to solve Error of "Missing file extension "tsx""
    // https://stackoverflow.com/a/59268871
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
    // to solve Error of "JSX not allowed in files with extension '.tsx'"
    // https://thewebdev.info/2021/09/19/how-to-fix-the-jsx-not-allowed-in-files-with-extension-js-error-with-eslint-config-airbnb-when-developing-a-react-app/
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],

    // to solve Error of  " Assignment to property of function parameter 'state' ""
    'no-param-reassign': [2, { props: false }],

    // https://github.com/typescript-eslint/typescript-eslint/issues/2621#issuecomment-701970389
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // https://stackoverflow.com/a/65768375
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
