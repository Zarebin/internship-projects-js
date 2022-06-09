module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ['plugin:react/recommended', 'airbnb','plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint','jest'],
  ignorePatterns: ["*.svg","*.scss","*.css"],
  rules: {

    //https://stackoverflow.com/a/65768375

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    //https://github.com/typescript-eslint/typescript-eslint/issues/2621#issuecomment-701970389

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",


    'no-param-reassign': [2, { props: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
     "import/no-cycle": "off",
     
  },
 

};
