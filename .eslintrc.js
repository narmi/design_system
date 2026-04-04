module.exports = {
  parser: "@babel/eslint-parser",
  plugins: ["jsx-a11y"],
  settings: {
    react: { version: "detect" },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:json/recommended",
    "plugin:storybook/recommended",
    "plugin:compat/recommended",
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
    },
    {
      files: ["*.test.*", "*.spec.*"],
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        test: "readonly",
        vi: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
      },
    },
  ],
};
