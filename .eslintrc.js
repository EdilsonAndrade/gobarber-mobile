module.exports = {
  env: {
    es6: true,
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
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
  settings:{
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
       }
      }
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};

