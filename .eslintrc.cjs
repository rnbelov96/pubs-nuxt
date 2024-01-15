module.exports = {
  root: true,
  extends: ['airbnb-base', '@nuxt/eslint-config'],
  rules: {
    'vue/no-multiple-template-root': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-new': 0,
    'arrow-parens': 0,
    'max-len': 0,
    'no-console': ['error', { allow: ['error'] }],
    'no-param-reassign': 0,
    'vue/no-v-html': 0,
    'arrow-body-style': 0,
  },
};
