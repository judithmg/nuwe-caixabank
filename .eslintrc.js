module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
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
    'import',
    'simple-import-sort',
    'react-hooks',
    'typescript-sort-keys',
    'prettier',
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    'prettier/prettier': 1,
    'max-len': [1, { code: 120, ignoreUrls: true }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': [1, { ignoreDeclarationSort: true }],
    'sort-keys': [1, 'asc', { caseSensitive: true, natural: false }],
    'import/extensions': 0,
    'sort-vars': 0,
    'typescript-sort-keys/interface': 0,
    'typescript-sort-keys/string-enum': 1,
    'react/no-unstable-nested-components': 0,
    'react/prop-types': 0,
    '@typescript-eslint/no-var-requires': 0,

    //React Native
    'react-native/sort-styles': [1, 'asc'],
  },
};
