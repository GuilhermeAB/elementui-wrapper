module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    indentation: 2,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};
