// Documentation for this file: https://prettier.io/en/configuration.html
module.exports = {
  // We use a larger print width because Prettier's word-wrapping seems to be tuned
  // for plain JavaScript without type annotations
  printWidth: 110,

  // Use .gitattributes to manage newlines
  endOfLine: "auto",

  // Use single quotes instead of double quotes
  singleQuote: true,

  // For ES5, trailing commas cannot be used in function parameters; it is counterintuitive
  // to use them for arrays only
  trailingComma: "none",

  // No semicolons at the end of statements
  semi: false,

  // Use 2 spaces for indentation
  tabWidth: 2,

  // indent the code inside <script> and <style> tags in Vue files
  vueIndentScriptAndStyle: true,
};
