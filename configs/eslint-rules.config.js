module.exports = {
  rules: {
    // common
    camelcase: 0, // off
    'no-nested-ternary': [2],
    // react
    'react/jsx-props-no-spreading': 0, // off
    'react/destructuring-assignment': 0, // off
    'react/jsx-no-bind': 2,
    'react/display-name': 'error',
    // imports
    'import/no-extraneous-dependencies': 0, // off
    'import/no-named-as-default': 0, // off
    'import/no-unresolved': ['off'], // off
    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // other
    'jsx-a11y/label-has-associated-control': [0], // off
    'jsx-a11y/anchor-is-valid': 0, // off
    'jsx-a11y/anchor-has-content': 0, // off
    'prettier/prettier': 'error',

    // global linting rules easing
    // TODO: make rules above erroring again
    complexity: ['warn', { max: 4 }],
    'no-shadow': 1,
    'no-plusplus': 1,
    'no-prototype-builtins': 1,
    'import/prefer-default-export': 'warn',
    'import/no-relative-parent-imports': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-filename-extension': 'warn',
    'react/static-property-placement': 'warn',
    'react/state-in-constructor': 'warn',
    'react/sort-comp': 'warn',
    'consistent-return': 'warn',
    'react/no-deprecated': 'warn',
    'no-unused-vars': 'warn',
  },
};
