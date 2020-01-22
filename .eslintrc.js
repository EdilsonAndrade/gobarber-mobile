module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier':'error', 
    'react/jsx-filename-extension':[
      'warn', {extensions: ['.jsx', '.js']}
    ], 
    'import/prefer-default-export':'off',
    'jsx-a11y/control-has-associated-label':[0],
    'react/state-in-constructor': [0, 'disabled'],
    'no-console': ["error", {allow: ["tron"]}],
    'no-param-reassign': 'off',
    'import/no-unresolved': ['off'],
    "import/extensions": ['off'],
    "react/jsx-props-no-spreading": ['off'],
  },
  settings: {
    'import/resolver': 
    {
      "babel-plugin-root-import":{
        rootPathSuffix: 'src'
      }
    }
  },
};
