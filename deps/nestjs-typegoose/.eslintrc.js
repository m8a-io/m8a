require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {

  extends: [
    '@m8a/eslint-config/profile/m8a-api'
  ],
  parserOptions: { tsconfigRootDir: __dirname }
}
