/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  }
}
