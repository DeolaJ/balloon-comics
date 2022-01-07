module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-value-no-unknown-custom-properties'],
  rules: {
    'custom-property-no-missing-var-function': false,
    'csstools/value-no-unknown-custom-properties': false,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
    'block-no-empty': null,
    'color-function-notation': 'legacy',
  },
};
