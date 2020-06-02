module.exports = {
  plugins: ['prettier', 'spellcheck'],
  extends: [
    'react-app',
    'airbnb',
    'prettier',
    'prettier/react',
    './configs/eslint-rules.config.js',
    './configs/spellcheck.config.js',
    './configs/padding-lines.config.js',
  ],
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
};
