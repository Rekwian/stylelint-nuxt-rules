export default {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'selector-class-pattern': null,
      },
    },
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'color-function-notation': 'legacy',
    'order/order': [
      'custom-properties',
      'declarations',
    ],
    'order/properties-alphabetical-order': true,
  },
};
