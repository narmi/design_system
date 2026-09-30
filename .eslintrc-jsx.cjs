// Also used on Storybook support files that are outside the full lint suite.
module.exports = {
  parser: "@babel/eslint-parser",
  // Issue stories contain compat/compat directives; load their rule definitions.
  plugins: ["react", "compat"],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
