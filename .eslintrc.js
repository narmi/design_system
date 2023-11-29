module.exports = {
  parser: "@babel/eslint-parser",
  plugins: ["jest", "jsx-a11y"],
  settings: {
    react: { version: "detect" },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:json/recommended",
    "plugin:storybook/recommended",
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
    "jest/globals": true,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
      },
    },
  ],
};
